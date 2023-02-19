import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewroomComponent } from './newroom.component';
import {NewroomRoutingModule} from './newroom-routing.module'
import { CardNewroomComponent } from '@/app/@public/core/components/card-newroom/card-newroom.component';
import { FormNewroomComponent } from '@/app/@public/core/components/form-newroom/form-newroom.component';

@NgModule({
  declarations: [NewroomComponent,CardNewroomComponent,FormNewroomComponent],
  imports: [
    CommonModule,
    FormsModule,
    NewroomRoutingModule
  ]
})
export class NewroomModule { }
