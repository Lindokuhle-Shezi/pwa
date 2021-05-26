import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CurrencyConversionService } from './currency-conversion.service';

describe('CurrencyConversionService', () => {
  let service: CurrencyConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [CurrencyConversionService]
    });
    service = TestBed.get(CurrencyConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
