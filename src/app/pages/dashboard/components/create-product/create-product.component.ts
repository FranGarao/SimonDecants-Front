import { Component } from '@angular/core';
//import { P, User } from '../../interfaces/Users';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { DashboardService } from '../../dashboard.service';
import { Product } from '../../../../interfaces/Products';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})

export class CreateProductComponent {
  constructor(private dashboardService: DashboardService){
    
  }
  formCreate= new FormGroup({
    
      title: new FormControl('', Validators.required),
      price: new FormControl(null, Validators.required),
      category: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      size: new FormControl('', Validators.required),
      stock: new FormControl(null, Validators.required),
  })
  /* Methods */
  addProduct() {
    const product: Product = {
      title: this.formCreate.value.title ?? "",
      price: this.formCreate.value.price ?? "",
      category: this.formCreate.value.category ?? "",
      gender: this.formCreate.value.gender ?? "",
      sizeId: this.formCreate.value.size ?? "",
      stock: this.formCreate.value.stock ?? "",
      img: this.formCreate.value.img ?? "",
      description: this.formCreate.value.description ?? "",
      status: this.formCreate.value.status ?? ""
    }
    this.dashboardService.createProduct(product).subscribe({
      next:(response)=> {
        return response;
      },
      error: (error) => {
        return error
      }
    })
  }
    

}
