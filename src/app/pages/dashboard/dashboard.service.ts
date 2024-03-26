import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Product } from '../../interfaces/Products';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    const url = `${environment.backendUrl}/products`;
    return this.http.get(url);
  }
  createProducts(product: Product): Observable<any> {
    const url = `${environment.backendUrl}/products/create`;
    return this.http.post(url, product);
  }
}
