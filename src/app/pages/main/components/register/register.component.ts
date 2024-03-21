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
  private formSubmitted: boolean = false;

  //TODO: crear interfaz user
  private user = {} as User;
  constructor(private service: AppService) {}

  ngOnInit() {
    this.getUsers();
  }

  /* Form */
  formRegister = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      cp: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      address_number: new FormControl('', Validators.required),
      province: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
    },
    // {
    //   validators: this.customValidation
    // }
  );
  /*Validation*/
  // customValidation(control: AbstractControl): ValidationErrors | null {
  //   const startDate = control.get('startDate').value;
  //   const endDate = control.get('endDate').value;

  //TODO: Revisar si es util este metodo (para que sirve get?)
  get name() {
    return this.formRegister.get('name');
  }
  get last_name() {
    return this.formRegister.get('last_name');
  }

  get email() {
    return this.formRegister.get('email');
  }

  get password() {
    return this.formRegister.get('password');
  }

  get phone() {
    return this.formRegister.get('phone');
  }

  get cp() {
    return this.formRegister.get('cp');
  }

  get address() {
    return this.formRegister.get('address');
  }

  get address_number() {
    return this.formRegister.get('address_number');
  }

  get province() {
    return this.formRegister.get('province');
  }

  get city() {
    return this.formRegister.get('city');
  }

  /* Methods */
  onSubmit() {
    this.formSubmitted = true;

    if (this.formRegister.invalid) {
      this.formRegister.markAllAsTouched();
      return;
    } else {
      this.user = {
        name: this.formRegister.get('name')?.value ?? '',
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
      },
    });
  }

  getGeolocation() {
    //TODO: !!IMPORTANTE
    //*Verificar la ley en cuanto al procesamiento de estos datos. Posiblemente sea necesario crear terminos y condiciones.
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        let lon = position.coords.longitude;
        let lat = position.coords.latitude;
        let response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
        );
        let data = await response.json();

        this.province?.setValue(data.address.state);
        this.city?.setValue(data.address.city);
        this.address?.setValue(data.address.road);
        this.cp?.setValue(data.address.postcode);
      });
    } else {
      console.log('La geolocalización no está disponible en tu navegador');
    }
  }
}
