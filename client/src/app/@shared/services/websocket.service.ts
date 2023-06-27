import { Injectable,EventEmitter } from '@angular/core';
import { io,Socket } from "socket.io-client";
import { SocketProvider } from './socketprovider.service';
import {Event} from "@/app/@shared/models/call/Events";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  events = [Event.JOIN,Event.DISCONNECT];
  cbEvent: EventEmitter<any> = new EventEmitter<any>();
  private socket: Socket;
  constructor(private socketProvider: SocketProvider) {
    this.socket = this.socketProvider.getSocketInstance();
    this.listener();
  }

  listener = () => {
    this.events.forEach(evenName => {
      this.socket.on(evenName, (data: any) => this.cbEvent.emit({
        name: evenName,
        data
      }));
    });
  };

  joinRoom = (data:any) => {
    this.socket.emit('join', data);
  }
  leftRoom = (data:any) => {
    this.socket.emit('disconnect', data);
  }
}
