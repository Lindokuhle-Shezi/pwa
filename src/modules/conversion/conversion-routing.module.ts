import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversionModule } from './conversion.module';
import * as containers from './containers';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'menu'
  },
  {
    path: 'menu',
    canActivate: [],
    component: containers.ConversionMenuComponent
  },
  {
    path: 'currency',
    canActivate: [],
    component: containers.CurrencyConversionComponent
  },
  {
    path: 'length',
    canActivate: [],
    component: containers.LengthConversionComponent
  }
];

@NgModule({
  imports: [ConversionModule, RouterModule.forChild(routes)],
})
export class ConversionRoutingModule { }

