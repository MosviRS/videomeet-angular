import { Component, OnInit } from '@angular/core';
import { RoomModel } from '@/app/@shared/models/room/Room.model';

@Component({
  selector: 'app-newroom',
  templateUrl: './newroom.component.html',
  styleUrls: ['./newroom.component.css']
})
export class NewroomComponent implements OnInit {
  room={
    title:"",
    subject:"",
    uuid:""
  };
  constructor() { }

  ngOnInit(): void {
  }
  recipeRoom(roomRes:RoomModel){
    this.room = {
      ...roomRes
    }
  }
}
