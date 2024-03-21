import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  getProducts(): Observable<any> {
    const url = `${environment.backendUrl}/products`;
    return this.http.get(url);
  }
  createProducts(products: any): Observable<any> {
    const url = `${environment.backendUrl}/products/create`;
    return this.http.get(url, products);
  }
}
