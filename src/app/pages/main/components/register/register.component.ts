import { Component } from '@angular/core';
import { Users, User } from '../../../../interfaces/Users';
import { AppService } from '../../../../app.service';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';

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
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  //! Necesito users??
  private users: Users = [];

  //TODO: crear interfaz user
  private user = {} as User;
  constructor(private service: AppService) {}

  ngOnInit() {
    this.getUsers();
  }
  /* Form */
  formRegister = new FormGroup({
    name: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    phone: new FormControl(),
    cp: new FormControl(),
    address: new FormControl(),
    addressNumber: new FormControl(),
    town: new FormControl(),
    city: new FormControl(),
  });

  get name() {
    console.log(this.formRegister.get('name'));
    return this.formRegister.get('name');
  }

  /* Methods */
  getUsers() {
    this.service.getUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error: any) => {
        console.error(error);
      },
    );
  }

  createUser() {
    this.user = {
      name: this.formRegister.get('name')?.value,
      lastName: this.formRegister.get('lastName')?.value,
      email: this.formRegister.get('email')?.value,
      password: this.formRegister.get('password')?.value,
      cp: this.formRegister.get('cp')?.value,
      phone: this.formRegister.get('phone')?.value,
      address: this.formRegister.get('address')?.value,
      addressNumber: this.formRegister.get('addressNumber')?.value,
      town: this.formRegister.get('town')?.value,
      city: this.formRegister.get('city')?.value,
    };

    this.service.createUser(this.user).subscribe(() => {
      return this.user;
    });
  }
}
