import { Component, HostListener, OnInit } from '@angular/core';
import { DeviceMediaService } from '@/app/@shared/services/device-media.service';
import { PeerService } from '@/app/@shared/services/peer.service';
import { WebsocketService } from '@/app/@shared/services/websocket.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {PayLoad} from '@/app/@shared/models/call/PayLoad.model';
import {Event} from "@/app/@shared/models/call/Events";
import {  Router } from '@angular/router';
import { FormNewroomService } from '@/app/@public/core/components/form-newroom/form-newroom.service';
import {UserCallService}from "@/app/@shared/services/user-call.service";
import { DataConnection, MediaConnection } from 'peerjs';
import { CallOutput, RoomUser } from '@/app/@shared/models/call/RoomUser.model';
import { UserStream } from '@/app/@shared/models/call/RoomUser.model';
import { UserService } from '@/app/@shared/services/user.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  currentStream: MediaStream;
  streamUsers: {[key:string]:UserStream}={};
  roomToken: string;
  idUser: string;
  idRoom: string;
  idUserRoom:string;
  connection: DataConnection | null;
  myUserStream: UserStream;
  constructor(
    private route: ActivatedRoute,
    private webSocketService: WebsocketService,
    private peerService: PeerService,
    private mediaService: DeviceMediaService,
    private roomSrv:FormNewroomService,
    private userCallSrv: UserCallService,
    private usrSrv:UserService,
    private router: Router 
  ) {
  }
  async ngOnInit():Promise<void> {
      await this.getParams();
      this.detectLocalDevices();  
      this.initSocket();
      this.initPeer();
  }
  @HostListener('window:beforeunload', [ '$event' ])
  async beforeUnloadHandler(event:any) {
    await this.deleteUserOnCall(this.idUserRoom);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    if(this.peerService.peer){
        this.peerService.peer.on('close', this.handlerClosePeer);
    }

  }
  async getParams(){
    this.roomToken = this.route.snapshot.paramMap.get('id') || "";
    this.idUser = this.route.snapshot.queryParamMap.get('idUser') || "";
    this.idRoom =  this.route.snapshot.queryParamMap.get('idRoom') || "";
    if (!this.roomToken || !this.idUser || !this.idRoom) {
      this.goToHome();
    }
    if(!await this.existRoom(this.roomToken)){
      this.goToHome();
    }
 
  }
  goToHome(){
    this.router.navigate([`newroom`]);
  }
  async existRoom(roomToken:string):Promise<boolean> {
    try{
      const response = await this.roomSrv.getRoom(roomToken).toPromise();
      if (response){
        if (response.code && response.status == false) return false;
        else return true;
      }
      return false;
    }catch(err){
      return false;
    }  
  }
  handlerClosePeer=()=>{
    const body:PayLoad = {
      idPeer: this.peerService.peer.id,
      roomToken: this.roomToken,
      idRoom: this.idRoom,
      idUser: this.idUser
    };
    this.webSocketService.leftRoom(body);
  }
  handlerOpenPeer=(id:string)=>{
    const body:PayLoad = {
      idPeer: id,
      roomToken: this.roomToken,
      idRoom: this.idRoom,
      idUser: this.idUser
    };
    this.webSocketService.joinRoom(body);
    this.saveUserOnCall({
      id_room: this.idRoom,
      id_user:this.idUser
    });
  }
  handlerListenCalls=(callEnter:MediaConnection) =>{
    callEnter.answer(this.currentStream);
    callEnter.on('stream', async (streamRemote) => {
        const lastMember =  await this.getMembers();
        if(lastMember){
          const userStream = {
            media: streamRemote,
            member: lastMember
          }
          this.addVideoUser(callEnter.peer,userStream);
        }
    
    });
  }
  initPeer() {
    this.peerService.peer.on('open', this.handlerOpenPeer);
    this.peerService.peer.on('call', this.handlerListenCalls, (err:Error) => {
      alert("Cannot initialize call");
    });
  }
  async getMembers(){
    const response = await this.userCallSrv.getAllMembersCall(this.idRoom).toPromise();
    const members=response.members?.filter((member) => member.fk_user != parseInt(this.idUser));
    if (members && members.length > 0){
      return members?.sort((a:any,b:any) => b.created_at - a.created_at)[0];
    }
    return null;
  }
  async getMyUser(){
    const response = await this.usrSrv.getUser(this.idUser).toPromise();
    return response.user || null;
  }
  saveUserOnCall(data:RoomUser){
    this.subscription.add(
      this.userCallSrv.saveUserOnCall(data).subscribe((res)=>{
        if(res){
          this.idUserRoom = res.call?.id_user_room || "";
          console.log(this.idUserRoom);
          return res;
        }
      })
    );
  }
  deleteUserOnCall(id:string){
    this.subscription.add(
      this.userCallSrv.deleteUserOnCall(id).subscribe()
    );
  }
  detectLocalDevices() {
    this.subscription.add(
      this.mediaService.getLocalStream().subscribe(
        async (stream: MediaStream) => {
          const myUser = await this.getMyUser(); 
          if(myUser){
            this.currentStream = stream;
            this.myUserStream = {
              media: stream,
              member: {
                id_user_room:"",
                fk_room:0,
                fk_user: 0,
                created_at: new Date(),
                user:{
                  name: myUser.name
                }
              }
            }
            
          }
       
        },
        (_: any) => {
          alert('Canot detect local devices');
        }
      )
    );
  }

  initSocket(){
    this.webSocketService.cbEvent.subscribe((res:any) => {
      const {idPeer} = res.data;
      if (res.name === Event.JOIN) {
        this.sendCall(idPeer, this.currentStream);
      }
      if (res.name == Event.DISCONNECT){
          this.deleteVideoUser(idPeer);
      } 
    })
  }
  addVideoUser(idPeer:string,userStream: UserStream) {
    if(!this.streamUsers[idPeer]){
      this.streamUsers[idPeer] = userStream;
    }
  }
  deleteVideoUser(idPeer:string){
    delete this.streamUsers[idPeer];
  }

  sendCall(idPeer:string, stream:MediaStream) {
    const newUserCall = this.peerService.peer.call(idPeer, stream);
    if (!!newUserCall) {
      newUserCall.on('stream', async (stream) => {
        const lastMember =await this.getMembers();
        if(lastMember){
          console.log(lastMember);
          const userStream = {
            media: stream,
            member: lastMember
          }
         this.addVideoUser(newUserCall.peer,userStream);
        }
      })
    }
  }
}
