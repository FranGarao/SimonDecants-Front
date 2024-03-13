import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { User, Users } from './interfaces/Users';
import { UserLogin } from './interfaces/UserLogin';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getProduct(): Observable<any> {
    return this.http.get(`${environment.backendUrl}/products`);
  }
  getUsers(): Observable<any> {
    return this.http.get(`${environment.backendUrl}/users`);
  }

  createUser(user: User): Observable<{}> {
    console.log({ user: user });
    return this.http.post(`${environment.backendUrl}/users/create`, user);
  }
  login(user: UserLogin): Observable<{}> {
    return this.http.post(`${environment.backendUrl}/users/login`, user);
  }
}
