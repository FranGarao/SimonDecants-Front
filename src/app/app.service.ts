import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { User, Users } from './pages/main/interfaces/Users';
import { UserLogin } from './pages/main/interfaces/UserLogin';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getProduct(): Observable<any> {
    return this.http.get(`${environment.backendUrl}/products`);
  }
  getUsers(): Observable<any> {
    const url = `${environment.backendUrl}/users`;
    return this.http.get(url);
  }

  createUser(user: User): Observable<{}> {
    const url = `${environment.backendUrl}/users/create`;
    return this.http.post(url, user);
  }
  login(user: UserLogin): Observable<{}> {
    const url = `${environment.backendUrl}/users/login`;
    return this.http.post(url, user);
  }
}
