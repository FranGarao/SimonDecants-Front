import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { RegisterComponent } from '../../components/register/register.component';
import { LoginComponent } from '../../components/login/login.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Ruta por defecto
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
