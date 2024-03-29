import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  //sino cambiar por (routes)forChild

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
