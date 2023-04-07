import { Component, OnInit } from '@angular/core';
import {DeviceMediaService} from "@/app/@shared/services/device-media.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  constructor(private mediaService:DeviceMediaService) { }
  currentStream:MediaStream;
  listStreamUser: Array<MediaStream>=[];

  ngOnInit(): void {
    this.detectLocalDevices();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  detectLocalDevices(){
    this.subscription.add(
      this.mediaService.getLocalStream().subscribe(
        (stream: MediaStream) => {
          this.currentStream = stream;
          this.addVideoStream(stream)
          this.addVideoStream(stream)
          this.addVideoStream(stream)
        },
        (_: any) => {
          alert("Canot detect local devices")
        }
      )
    );
  }
  addVideoStream(stream:MediaStream){
    this.listStreamUser.push(stream);
  }

}
