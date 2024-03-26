import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { MainComponent } from './main.component';

const routes: Routes = [
    {
    path: '',
    component: MainComponent,
    children: [{ path: 'user/register', component: RegisterComponent }],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  //sino cambiar por (routes)forChild

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
