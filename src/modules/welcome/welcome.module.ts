import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule } from '../app-common/modules/material.module';
import * as welcomeContainers from './containers';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ...welcomeContainers.containers
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    //NgbModule,
  ],
  exports: [
    ...welcomeContainers.containers
  ]
})
export class WelcomeModule { }
