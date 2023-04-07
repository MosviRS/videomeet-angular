import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import {BottomMenuComponent} from "@/app/@public/core/components/bottom-menu/bottom-menu.component";
import {VideoPlayerComponent} from "@/app/@public/core/components/video-player/video-player.component"


@NgModule({
  declarations: [RoomComponent,BottomMenuComponent,VideoPlayerComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
  ]
})
export class RoomModule { }
