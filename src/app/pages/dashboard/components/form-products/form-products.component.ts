import { Component } from '@angular/core';
//import { P, User } from '../../interfaces/Users';
import { AppService } from '../../../../app.service';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrl: './form-products.component.css'
})

export class FormProductsComponent {
  constructor(private service: AppService){
    
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
    const product = {
      title:this.formCreate.get('title')?.value,
      price:this.formCreate.get('price')?.value,
      category:this.formCreate.get('category')?.value,
      gender:this.formCreate.get('gender')?.value,
      size:this.formCreate.get('size')?.value,
      stock:this.formCreate.get('stock')?.value,
      img:this.formCreate.get('img')?.value,
      description:this.formCreate.get('description')?.value,
      status:this.formCreate.get('status')?.value,
    }
    console.log(product);
    this.service.createProducts(product).subscribe({
      next:(response)=> {
        return response;
      },
      error: (error) => {
        return error
      }
    })
    
  }

}
