import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';

import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [MainComponent],
})
export class MainModule {}
