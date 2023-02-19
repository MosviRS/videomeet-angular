import { RoomForm,RoomModel } from '@/app/@shared/models/room/Room.model';
import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormNewroomService } from '@/app/@public/core/components/form-newroom/form-newroom.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-newroom',
  templateUrl: './form-newroom.component.html',
  styleUrls: ['./form-newroom.component.css']
})
export class FormNewroomComponent implements OnInit {
  @Output() ngSubmit: EventEmitter<RoomModel | void> = new EventEmitter();
  private subscription: Subscription = new Subscription();
  room:RoomForm= {
    title:"",
    subject:""
  }
  constructor(private roomSrv:FormNewroomService) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onSubmit(form: NgForm){
    this.subscription.add(
      this.roomSrv.sendRoom(form.value).subscribe((res)=>{
        if(res){
          const room = res.room as RoomModel;
          this.ngSubmit.emit(room);
        }
      })
    );
  }

}
