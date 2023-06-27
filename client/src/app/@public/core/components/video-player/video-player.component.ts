import { Component, OnInit,Input } from '@angular/core';
import { UserStream } from '@/app/@shared/models/call/RoomUser.model';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input("streamMediaDevice") stream: UserStream;
  constructor() { }

  ngOnInit(): void {
  }
}
