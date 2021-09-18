import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {

  readonly uri: string = 'ws://localhost:3000';
  socket: Socket;

  constructor() {
    this.socket = io(this.uri);
  }

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next({ data: data, socket: this.socket });
      });
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

}
