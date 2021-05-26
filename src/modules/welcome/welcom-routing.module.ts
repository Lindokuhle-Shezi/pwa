import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeModule } from './welcome.module';
import * as containers from './containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  },
  {
    path: 'welcome',
    canActivate: [],
    component: containers.WelcomeComponent
  }

];

@NgModule({
  imports: [WelcomeModule, RouterModule.forChild(routes)],
})
export class WelcomeRoutingModule { }

