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
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  constructor(private dashboardService: DashboardService){
    
  }
  formUpdate= new FormGroup({
    
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
updateProduct(){}
/* Methods */
onSubmit() {
  const product: any = {
    title:this.formUpdate.get('title')?.value?? "",
    //price:this.formUpdate.get('price')?.value?? 0,
    category:this.formUpdate.get('category')?.value?? "",
    gender:this.formUpdate.get('gender')?.value?? "",
    size:this.formUpdate.get('size')?.value?? "",
    //stock:this.formUpdate.get('stock')?.value?? 0,
    img:this.formUpdate.get('img')?.value?? "",
    description:this.formUpdate.get('description')?.value?? "",
    status:this.formUpdate.get('status')?.value?? ""
  }
  console.log(product);
  this.dashboardService.updateProduct(product).subscribe({
    next:(response)=> {
      return response;
    },
    error: (error) => {
      return error
    }
  })
  
}
}
