import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public-routing.module';
import { HeaderComponent } from '@/app/@public/core/components/header/header.component';
import { PublicComponent } from './public.component';
import { ContainerComponent } from '@/app/@public/core/components/container/container.component';


@NgModule({
  declarations: [PublicComponent,ContainerComponent,HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
