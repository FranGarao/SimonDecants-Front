import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    const url = `${environment.backendUrl}/products`;
    return this.http.get(url);
  }
  createProducts(products: any): Observable<any> {
    const url = `${environment.backendUrl}/products/create`;
    return this.http.get(url, products);
  }
}
