import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CurrencyConversionService } from '../services/currency-conversion.service'
@Component({
  selector: 'app-currency-conversion',
  templateUrl: './currency-conversion.component.html',
  styleUrls: ['./currency-conversion.component.scss']
})
export class CurrencyConversionComponent implements OnInit {

  convertingFrom: string;
  convertingTo: string;
  fromAmounth = new FormControl('');
  toAmounth = new FormControl('');
  codes;
  conversionResult;


  constructor(private currencyConversionService: CurrencyConversionService) { }

  ngOnInit(): void {
    this.currencyConversionService.getAllCodes().subscribe(
      response => {
        if (response.result = 'success') {
          this.codes = response.supported_codes;
        }
        // console.log(this.codes)
      },
      error => {
        console.log('error handling goes here when trying to fecth code for currencies');
      }
    );
  }

  calculate(str: string): void {
    console.log('testing')
    if (this.convertingFrom !== undefined && this.convertingTo !== undefined) {
      if (this.toAmounth.value === "" && this.fromAmounth.value === "") {
        if (str.includes('to')) {
          this.convert('to', this.convertingFrom, this.convertingTo, undefined);
        } else {
          this.convert('from', this.convertingTo, this.convertingFrom, undefined);
        }
      } else {
        if (str.includes('to')) {
          this.fromAmounth.patchValue("");
          this.convert('from', this.convertingFrom, this.convertingTo, this.toAmounth.value);          
        } else {          
          this.toAmounth.patchValue("");
          this.convert('to', this.convertingTo, this.convertingFrom, this.fromAmounth.value);         
        }
      }
    }
  }


  async convert(direction, from, to, amount?: number) {

    const i = this.currencyConversionService.convertCurrency(from, to, amount).toPromise().then(
      response => {
        console.log(response);
        if (amount !== undefined) {
          this.conversionResult = response.conversion_result;
        } else {
          this.conversionResult = response.conversion_rate;

        }

      }
    ).catch(
      err => {

      }).finally(() => {
        console.log('........ ', this.conversionResult);
        if (this.toAmounth.value === "" && this.fromAmounth.value === "") {
          if (direction.includes('to')) {
            this.patchValues(1, this.conversionResult);
          } else {
            this.patchValues(this.conversionResult, 1);
          }
        } else {
          if (direction.includes('to')) {
            this.patchValues(this.fromAmounth.value, this.conversionResult);
          } else {
            this.patchValues(this.conversionResult,this.toAmounth.value);
          }
        }
      }
      )
    console.log('iiii ', i)
  }

  patchValues(patchFrom, patchTo) {
    this.fromAmounth.patchValue(patchFrom);
    this.toAmounth.patchValue(patchTo);
  }


  cleanString(str: string): string {
    return str.replace(/^"(.+(?="$))"$/, '$1');
  }
  /// following are the input validation 
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    // must be between 48 - 57 equal to 44 ,46
    if ((charCode === 44 || charCode === 46) || (charCode > 48 && charCode < 57)) {
      return true;
    }
    return false;

  }
  isFromCommaSepereted(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (this.fromAmounth.value === '' && (charCode === 44 || charCode === 46)) {
      return false;
    } else if (this.isCommaSepereted(this.fromAmounth.value) && (charCode === 44 || charCode === 46)) {
      return false;
    }
    return true;
  }
  istoCommaSepereted(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    console.log(this.toAmounth.value === '')
    if (this.toAmounth.value === '' && (charCode === 44 || charCode === 46)) {
      return false;
    } else if (this.isCommaSepereted(this.toAmounth.value) && (charCode === 44 || charCode === 46)) {
      return false;
    }
    return true;
  }
  isCommaSepereted(str): boolean {
    if (str.includes(',') || str.includes('.')) {
      return true;
    }
    return false;
  }
}