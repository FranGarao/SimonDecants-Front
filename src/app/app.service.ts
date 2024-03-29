import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { User, Users } from './interfaces/Users';
import { UserLogin } from './interfaces/UserLogin';
import { ProductsList } from './interfaces/Products';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Users> {
    const url = `${environment.backendUrl}/users`;
    return this.http.get<Users>(url);
  }

  createUser(user: User): Observable<Users> {
    const url = `${environment.backendUrl}/users/create`;
    return this.http.post<Users>(url, user);
  }
  login(user: UserLogin): Observable<{}> {
    const url = `${environment.backendUrl}/users/login`;
    return this.http.post(url, user);
  }
  setCookies(): Observable<{}> {
    const url = `${environment.backendUrl}/users/login`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers: headers, withCredentials: true };
    return this.http.get(url, options);
  }
  logOut(): Observable<{}> {
    const url = `${environment.backendUrl}/users/logout`;
    return this.http.get(url);
  }
  getProducts(): Observable<ProductsList> {
    const url = `${environment.backendUrl}/products`;
    return this.http.get<ProductsList>(url);
  }
}
