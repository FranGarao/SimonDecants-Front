import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'home', component: AppComponent }, // Ruta por defecto
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  // { path: '**', component: ComponenteNotFoundComponent } // Ruta para manejar errores
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
