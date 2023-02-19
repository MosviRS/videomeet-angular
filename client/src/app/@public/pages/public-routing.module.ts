import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: ``,
        loadChildren: () =>
          import('./join/join.module').then((m) => m.JoinModule),
      },
      {
        path: `newroom`,
        loadChildren: () =>
          import('./newroom/newroom.module').then((m) => m.NewroomModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
