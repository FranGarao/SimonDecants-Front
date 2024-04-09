import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

/* Import components */
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/main/components/register/register.component';
import { LoginComponent } from './pages/main/components/login/login.component';
import { HomeComponent } from './pages/main/components/home/home.component';
import { NavbarComponent } from './pages/main/components/navbar/navbar.component';
import { HeaderComponent } from './pages/main/components/header/header.component';
import { FooterComponent } from './pages/main/components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
/* Modules */
import { MainModule } from './pages/main/main.module';

import { UpdateProductComponent } from './pages/dashboard/components/update-product/update-product.component';
import { CreateProductComponent } from './pages/dashboard/components/create-product/create-product.component';
import { ProductListComponent } from './pages/dashboard/components/product-list/product-list.component';
import { ProductsComponent } from './pages/components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    MainComponent,
    NotFoundComponent,
    CreateProductComponent, // Add the imported component here
    UpdateProductComponent, ProductListComponent, ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MainModule,
    RouterLink,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
