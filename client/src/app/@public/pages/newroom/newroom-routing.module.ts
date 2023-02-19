import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewroomComponent } from './newroom.component';

const routes: Routes = [
  {
    path:'',component:NewroomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewroomRoutingModule { }