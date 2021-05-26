import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRoutes, Router, RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { WelcomeComponent } from './welcome.component';

class TestRouterComponent {
}

let config: Routes = [
    {
        path: '', component: TestRouterComponent
    }
];
describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule, RouterModule
      ],
      declarations: [ WelcomeComponent ],
      providers: [
        provideRoutes(config)
      ]
    })
    .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(WelcomeComponent);
        component = fixture.componentInstance;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
