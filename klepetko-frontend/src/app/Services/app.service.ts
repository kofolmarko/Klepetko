import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getHomepage() {
    return this.http.get(environment.apiUrl + '/homepage');
  }

  addUser(user: any) {
    return this.http.post(this.rootURL + '/user', {user});
  }

}
