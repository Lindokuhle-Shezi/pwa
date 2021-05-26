import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule, Routes,provideRoutes } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConversionMenuComponent } from './conversion-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import {EnumToArrayPipe} from '../../../app-common/pipes/enum-to-array-pipe'
class TestRouterComponent {
}

let config: Routes = [
    {
        path: '', component: TestRouterComponent
    }
];

describe('ConversionMenuComponent', () => {
  let component: ConversionMenuComponent;
  let fixture: ComponentFixture<ConversionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, RouterModule],
      declarations: [ConversionMenuComponent,EnumToArrayPipe],
      providers: [
        HttpClient,
        provideRoutes(config)
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ConversionMenuComponent);
        component = fixture.componentInstance;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


