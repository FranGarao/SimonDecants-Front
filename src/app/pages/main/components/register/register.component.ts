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
  public formSubmitted: boolean = false;

  //TODO: crear interfaz user
  private user = {} as User;
  constructor(private service: AppService) {}

  ngOnInit() {
    this.getUsers();
    this.getGeolocation();
  }

  /* Form */
  formRegister = new FormGroup({
    name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    cp: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    address_number: new FormControl('', Validators.required),
    town: new FormControl('', Validators.required),
    province: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
  });

  //TODO: Revisar si es util este metodo (para que sirve get?)
  get name() {
    return this.formRegister.get('name');
  }
  get last_name() {
    return this.formRegister.get('last_name');
  }

  /* Methods */
  onSubmit(event: Event) {
    this.formSubmitted = true;
    if (this.formRegister.invalid) {
      this.formRegister.markAllAsTouched();
      return;
    } else {
      this.user = {
        name: this.formRegister.get('name')?.value ?? 'pepe',
        last_name: this.formRegister.get('last_name')?.value ?? '',
        email: this.formRegister.get('email')?.value ?? '',
        password: this.formRegister.get('password')?.value ?? '',
        cp: this.formRegister.get('cp')?.value ?? '',
        phone: this.formRegister.get('phone')?.value ?? '',
        address: this.formRegister.get('address')?.value ?? '',
        address_number: this.formRegister.get('address_number')?.value ?? '',
        province: this.formRegister.get('province')?.value ?? '',
        city: this.formRegister.get('city')?.value ?? '',
      };
    }

    this.service.createUser(this.user).subscribe(() => {
      return this.user;
    });
  }
  getUsers() {
    this.service.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error: any) => {
        console.error(error);
        throw new error();
      },
    });
  }

  getGeolocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        console.log('Latitud: ' + position.coords.latitude);
        console.log('Longitud: ' + position.coords.longitude);
        let lon = position.coords.longitude;
        let lat = position.coords.latitude;
        // let url = `https://www.google.com/maps/@${lat},${lon},15z`;
        let response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
        );
        let data = await response.json();
        console.log(data);
        return data;
      });
    } else {
      console.log('La geolocalización no está disponible en tu navegador');
    }
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     console.log(position);
    //   });
  }
}
