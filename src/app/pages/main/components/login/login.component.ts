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

  constructor(private service: AppService) {}

  /* Form */
  formLogin = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  /* Methods */
  login() {
    console.log(this.formLogin.get('email')?.value);
    this.user = {
      email: this.formLogin.get('email')?.value,
      password: this.formLogin.get('password')?.value,
    };
    this.service.login(this.user).subscribe(() => {
      console.log('Logged in');
    });
  }
}
