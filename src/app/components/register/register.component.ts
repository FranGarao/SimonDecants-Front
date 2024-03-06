


import { Component } from '@angular/core';
import { Users, User } from '../../interfaces/Users';
import { AppService } from '../../app.service';
import { FormControl, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

// function customValidation(control: AbstractControl): ValidationErrors | null {
//   const startDate = control.get('startDate').value;
//   const endDate = control.get('endDate').value;

//   const currentDate = new Date().toISOString().split('T')[0];
//   const minDate = new Date(1900,1,1).toISOString().split('T')[0];

//   const startDateValidation = startDate > currentDate || startDate > endDate || startDate < minDate;
//   const endDateValidation = endDate > currentDate || endDate < startDate ;

//   if (startDateValidation || endDateValidation) {
//     return { datesInvalid: true }; 
//   }
//   return null; 
// }
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private users: Users = [];
  private user = {} as User;
  constructor(private service: AppService) {

  }

  /* Form */
  formUser = new FormGroup({
    name: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  })

  get name() {
    console.log(this.formUser.get('name'));
    return this.formUser.get('name');
  }

  /* Methods */
  createUser() {
    this.user = {
      name: this.formUser.get('name')?.value,
      lastName: this.formUser.get('lastName')?.value,
      email: this.formUser.get('email')?.value,
      password: this.formUser.get('password')?.value
    }

    this.service.createUser(this.user).subscribe(() => {
      return this.user;
    }
    )
  }
} 
