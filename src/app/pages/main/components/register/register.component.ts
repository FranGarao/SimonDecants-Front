import { Component } from '@angular/core';
import { Users, User } from '../../interfaces/Users';
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
    last_name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    phone: new FormControl(),
    cp: new FormControl(),
    address: new FormControl(),
    address_number: new FormControl(),
    town: new FormControl(),
    province: new FormControl(),
    city: new FormControl(),
  });

  //TODO: Revisar si es util este metodo (para que sirve get?)
  get name() {
    console.log(this.formRegister.get('name'));
    return this.formRegister.get('name');
  }

  /* Methods */
  onSubmit(event: Event) {
    event.preventDefault();

    this.user = {
      name: this.formRegister.get('name')?.value,
      last_name: this.formRegister.get('last_name')?.value,
      email: this.formRegister.get('email')?.value,
      password: this.formRegister.get('password')?.value,
      cp: this.formRegister.get('cp')?.value,
      phone: this.formRegister.get('phone')?.value,
      address: this.formRegister.get('address')?.value,
      address_number: this.formRegister.get('address_number')?.value,
      province: this.formRegister.get('province')?.value,
      city: this.formRegister.get('city')?.value,
    };

    this.service.createUser(this.user).subscribe(() => {
      return this.user;
    });
  }
  getUsers() {
    this.service.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        console.log(this.users);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  createUser() {}
}
