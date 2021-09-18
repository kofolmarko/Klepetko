import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { io } from 'socket.io-client';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AppService {

  readonly uri: string = 'ws://localhost:3000';
  socket: any;

  constructor(
    private http: HttpClient
  ) {
    this.socket = io(this.uri);
  }

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      });
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

  rootURL = '/api';

  connect() {
    this.socket.connect();
  }

  getHomepage() {
    return this.http.get(environment.apiUrl + '/homepage');
  }

  addUser(user: any) {
    return this.http.post(this.rootURL + '/user', { user });
  }
}
