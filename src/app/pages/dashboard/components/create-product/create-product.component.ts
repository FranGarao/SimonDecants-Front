import { Component } from '@angular/core';
//import { P, User } from '../../interfaces/Users';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { log } from 'console';
import { DashboardService } from '../../dashboard.service';
import { Product } from '../../../main/interfaces/Products';

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
      price: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      size: new FormControl('', Validators.required),
      stock: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
  })
  /* Methods */
  onSubmit() {
    const product: any = {
      title:this.formCreate.get('title')?.value?? "",
      //price:this.formCreate.get('price')?.value?? 0,
      category:this.formCreate.get('category')?.value?? "",
      gender:this.formCreate.get('gender')?.value?? "",
      size:this.formCreate.get('size')?.value?? "",
      //stock:this.formCreate.get('stock')?.value?? 0,
      img:this.formCreate.get('img')?.value?? "",
      description:this.formCreate.get('description')?.value?? "",
      status:this.formCreate.get('status')?.value?? ""
    }
    console.log(product);
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
