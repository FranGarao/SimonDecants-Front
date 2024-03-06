import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppService } from './app.service';
import { ProductsList } from './interfaces/Products';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SimonDecants-Front';
  readonly APIUrl = 'http://localhost:3001/';
  public products: ProductsList = [];

  constructor(private router: Router, private http: HttpClient, private service: AppService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.service.getProduct().subscribe((data) => {
      this.products = data.data;
    });
  }
  getRegister() {
    this.router.navigateByUrl('users/register');
  }
}
