import { Component, OnInit,Input } from '@angular/core';
import {RoomModel} from '@/app/@shared/models/room/Room.model';

@Component({
  selector: 'app-card-newroom',
  templateUrl: './card-newroom.component.html',
  styleUrls: ['./card-newroom.component.css']
})
export class CardNewroomComponent implements OnInit {
  @Input('roomData') room: RoomModel;
  constructor() { }

  ngOnInit(): void {
  }

}
