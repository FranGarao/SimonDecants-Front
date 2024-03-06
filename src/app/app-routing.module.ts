import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'home', component: AppComponent }, // Ruta por defecto
  { path: 'users/register', component: SignInComponent }
  // { path: '**', component: ComponenteNotFoundComponent } // Ruta para manejar errores

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
