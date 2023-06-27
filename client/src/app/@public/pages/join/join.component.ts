import { UserResponse } from './../../../@shared/models/user/User.model';
import { RoomResponse } from '@/app/@shared/models/room/Room.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Join } from '@/app/@shared/models/call/Join.model';
import { Subscription } from 'rxjs';
import { FormNewroomService } from '@/app/@public/core/components/form-newroom/form-newroom.service';
import {  Router } from '@angular/router';
import {UserService}from "@/app/@shared/services/user.service";
import { User } from '@/app/@shared/models/user/User.model';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  join:Join={
    name:"",
    roomToken: ""
  }
  constructor(private roomSrv:FormNewroomService,private router: Router, private usrSrv:UserService ) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  joinUserRoom(){
    
  }
  async existRoom(roomToken:string):Promise<RoomResponse | null> {
    try{
      const response = await this.roomSrv.getRoom(roomToken).toPromise();
      if (response){
        if (response.code && response.status == false) return null;
        else return response;
      }
      return null;
    }catch(err){
      return null;
    }  
  }
  async saveUser(name:string):Promise<User | null>{
    try{
      const response = await this.usrSrv.saveUser(name).toPromise();
      if (response){
        if (response.code && response.status == false) return null;
        else return response.user;
      }
      return null;
    }catch(err){
      return null;
    }
  }
  async onJoinSubmit(form: NgForm){
    const { roomToken, userName } = form.value;
    const result = await this.existRoom(roomToken);
    if(!result){
        alert("No existe la reunion");
        return;
    }
    if(!roomToken || !userName){
      alert("No existe la reunion");
      return;
    }
    const user = await this.saveUser(userName);
    if(!user){
      alert("No se pudo guardar el usuario");
      return;
    }
    const id_room = result.room?.id_room;
    const id_user = user.id_user;
    this.router.navigate([`/room/${roomToken}`], { queryParams: {idUser: id_user, idRoom:id_room } });
    return;
  }

}
