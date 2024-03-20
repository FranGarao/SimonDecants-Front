import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { AppService } from '../../../../app.service';
import { UserLogin } from '../../interfaces/UserLogin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private user = {} as UserLogin;
  public userNotFound: boolean = false;
  constructor(private service: AppService) {}

  /* Custom Validator */
  customValidator = (control: AbstractControl): ValidationErrors | null => {
    const email = control.get('email')?.value;
    const password = control.get('password')?.value;

    // Verificar si el correo electrónico tiene un "@" utilizando una expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      return { invalidEmail: true };
    }

    // Verificar si la contraseña tiene al menos 8 caracteres y al menos 1 número
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (password && !passwordRegex.test(password)) {
      return { invalidPassword: true };
    }

    return null;
  };
  /* Form */
  formLogin = new FormGroup(
    {
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    },
    {
      validators: this.customValidator,
    },
  );

  get email() {
    return this.formLogin.get('email');
  }
  get password() {
    return this.formLogin.get('password');
  }

  /* Methods */
  login() {
    this.user = {
      email: this.formLogin.get('email')?.value ?? '',
      password: this.formLogin.get('password')?.value ?? '',
    };
    if (this.user.email !== '' && this.user.password !== '') {
      this.service.login(this.user).subscribe({
        next: (response: any) => {
          this.userNotFound = false;
          if (response && response.error) {
            console.log(response);
            this.userNotFound = true;
          } else {
            console.log('Success');
          }
        },
        error: (error: any) => {
          console.error(error);
        },
      });
      this.service.setCookies().subscribe({
        next: (response: any) => {
          console.log(response);
        },
        error: (error: any) => {
          console.error(error);
        },
      });
    } else {
      this.userNotFound = true;
    }
  }
}
