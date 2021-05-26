import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/v1/welcome',

  },
  {
    path: 'v1',
    canActivate: [],
    loadChildren: () => import('../modules/welcome/welcom-routing.module').then(m => m.WelcomeRoutingModule)

  },
  {
    path: 'conv',
    canActivate: [],
    loadChildren: () => import('../modules/conversion/conversion-routing.module').then(m => m.ConversionRoutingModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' , preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

