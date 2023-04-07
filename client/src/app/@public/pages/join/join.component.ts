import { Component, OnInit } from '@angular/core';
import { RoomModel } from '@/app/@shared/models/room/Room.model';
import { NgForm } from '@angular/forms';
import { Join } from '@/app/@shared/models/call/Join.model';
import { Subscription } from 'rxjs';
import { FormNewroomService } from '@/app/@public/core/components/form-newroom/form-newroom.service';
import {  Router } from '@angular/router';

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
  constructor(private roomSrv:FormNewroomService,private router: Router ) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onJoinSubmit(form: NgForm){
    this.router.navigate(['/room/xxx-xxx']);
/*     const { roomToken , userName } = form.value;
    this.subscription.add(
      this.roomSrv.getRoom(roomToken).subscribe((res)=>{
        if(res){
          const room = res.room as RoomModel;
          console.log(room);
        }
      })
    ); */
  }

}
