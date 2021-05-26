import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {
  constructor(private http:  HttpClient) { }

  convertCurrency(from:string ,to:string,amounth?:number):Observable<any>{
    if(amounth !== undefined){
      console.log('https://v6.exchangerate-api.com/v6/' + environment.apiKey +'/pair/'+ from +'/'+ to + '/' + amounth);
      return this.http.get('https://v6.exchangerate-api.com/v6/' + environment.apiKey +'/pair/'+ from +'/'+ to + '/' + amounth);
    }
    console.log('https://v6.exchangerate-api.com/v6/' + environment.apiKey +'/pair/'+ from +'/'+ to )
    return this.http.get('https://v6.exchangerate-api.com/v6/' + environment.apiKey +'/pair/'+ from +'/'+ to );
  }

  getAllCodes():Observable<any>{
    return this.http.get('https://v6.exchangerate-api.com/v6/'+environment.apiKey +'/codes');
  }
}
