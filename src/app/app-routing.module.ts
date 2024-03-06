import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'home', component: AppComponent }, // Ruta por defecto
  { path: 'users/register', component: RegisterComponent }
  // { path: '**', component: ComponenteNotFoundComponent } // Ruta para manejar errores

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
