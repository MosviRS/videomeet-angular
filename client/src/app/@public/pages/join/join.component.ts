import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Join } from '@/app/@shared/models/call/Join.model';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  join:Join={
    name:"",
    roomToken: ""
  }
  constructor() { }

  ngOnInit(): void {
  }
  onJoinSubmit(form: NgForm){
    console.log(form.value);
  }

}
