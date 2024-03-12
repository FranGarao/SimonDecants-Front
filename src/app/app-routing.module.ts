import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  // { path: '', component: AppComponent }, // Ruta por defecto
  { path: '', component: MainComponent }, // Ruta por defecto
  { path: 'users/register', component: RegisterComponent },
  // { path: 'users/register', component: RegisterComponent },
  // { path: 'users/login', component: LoginComponent },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
