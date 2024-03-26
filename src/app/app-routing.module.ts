import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/main/components/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateProductComponent } from './pages/dashboard/components/create-product/create-product.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{ path: 'user/register', component: RegisterComponent }],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'create/product', component: CreateProductComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
