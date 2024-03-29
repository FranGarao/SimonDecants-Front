import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/main/components/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateProductComponent } from './pages/dashboard/components/create-product/create-product.component';
import { UpdateProductComponent } from './pages/dashboard/components/update-product/update-product.component';
import { ProductListComponent } from './pages/dashboard/components/product-list/product-list.component';


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
      { path: 'product/create', component: CreateProductComponent },
      { path: 'product/update', component: UpdateProductComponent },
      { path: 'product', component: ProductListComponent },

    ]
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
