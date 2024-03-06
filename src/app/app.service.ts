import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { User } from './interfaces/Users';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get(`${environment.backendUrl}/products`);
  }
  getUsers(): Observable<any> {
    return this.http.get(`${environment.backendUrl}/users`);
  }

  createUser(user: User): Observable<any> {
    console.log(user);

    return this.http.post(`${environment.backendUrl}/users/create`, user);
  }
}
