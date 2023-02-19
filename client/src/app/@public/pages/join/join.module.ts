import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinComponent } from './join.component';
import {JoinRoutingModule} from './join-routing.module'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [JoinComponent],
  imports: [
    CommonModule,
    FormsModule,
    JoinRoutingModule
  ]
})
export class JoinModule { }
