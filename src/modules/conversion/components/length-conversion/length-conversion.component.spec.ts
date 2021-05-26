import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { LengthConversionComponent } from './length-conversion.component';

describe('LengthConversionComponent', () => {
  let component: LengthConversionComponent;
  let fixture: ComponentFixture<LengthConversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LengthConversionComponent],
      providers: [
        FormBuilder // provided formbuilder since its injected to the component
      ]
    })
      .compileComponents().then(
        () => {
          fixture = TestBed.createComponent(LengthConversionComponent);
          component = fixture.componentInstance;
        }
      )
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
