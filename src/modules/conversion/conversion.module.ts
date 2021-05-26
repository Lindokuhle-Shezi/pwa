import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule } from '../app-common/modules/material.module';
import { ConversionMenuComponent } from './components/conversion-menu/conversion-menu.component';
import { CurrencyConversionComponent } from './components/currency-conversion/currency-conversion.component';
import { LengthConversionComponent } from './components/length-conversion/length-conversion.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {EnumToArrayPipe} from '../app-common/pipes/enum-to-array-pipe';
import * as containers from './containers';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ...containers.containers,
    EnumToArrayPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class ConversionModule { }
