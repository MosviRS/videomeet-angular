import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({ providedIn: 'root' })
export class SocketProvider {
  constructor() {}

  getSocketInstance(): Socket {
    return io('http://localhost:3000', {
      withCredentials: false
    });
  }
}