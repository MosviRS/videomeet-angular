import { Component, OnInit } from '@angular/core';
import {ModeCall} from '@/app/@shared/models/call/ModeCall.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggleModeCall:string = ModeCall.Meet; 
  ModeCallType = ModeCall;
  constructor() { }

  ngOnInit(): void {
  }

}
