import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CarroComponent } from './carro/carro.component';

const routes: Routes = [
  //Home
  {
    path: '',
    component: HomeComponent
  },
  //Carros
  {
    path: 'carros',
    component: CarroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
