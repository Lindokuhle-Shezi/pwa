import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-length-conversion',
  templateUrl: './length-conversion.component.html',
  styleUrls: ['./length-conversion.component.scss']
})
export class LengthConversionComponent implements OnInit {

  form: FormGroup;
  tempIncrement = [];
  properties = [];
  units = [];
  factors = [];
  propertyIndex;

  constructor(private fb: FormBuilder) {
    this.properties[0] = "Area";
    this.units[0] = ["Acre (acre)", "Are", "Barn (barn)", "Circular mil", "Hectare", "Rood", "Square centimeter", "Square foot (ft^2)", "Square inch (in^2)", "Square kilometer", "Square meter (m^2)", "Square mile (mi^2)", "Square yard (yd^2)"];
    this.factors[0] = [4046.856, 100, 1E-28, 5.067075E-10, 10000, 1011.71413184285, .0001, 9.290304E-02, 6.4516E-04, 1000000, 1, 2589988, 0.8361274];

    this.properties[1] = "Length";
    this.units[1] = ["Angstrom (A')", "Astronomical unit (AU)", "Caliber (cal)", "Centimeter (cm)", "Ell", "Em", "Fathom", "Fermi (fm)", "Foot (ft)", "Furlong", "Inch (in)", "Kilometer (km)", "League (int'l)", "League (UK)", "Light year (LY)", "Meter (m)", "Micrometer (mu-m)", "Mil", "Mile (int'l nautical)", "Mile (UK nautical)", "Mile (US nautical)", "Mile (US statute)", "Millimeter (mm)", "Nanometer (nm)", "Parsec", "Pica (printer)", "Picometer (pm)", "Point (pt)", "Rod", "Yard (yd)"];
    this.factors[1] = [1E-10, 1.49598E+11, .000254, .01, 1.143, 4.2323E-03, 1.8288, 1E-15, .3048, 201.168, .0254, 1000, 5556, 5556, 9.46055E+15, 1, .000001, .0000254, 1852, 1853.184, 1852, 1609.344, .001, 1E-09, 3.08374E+16, 4.217518E-03, 1E-12, .0003514598, 5.0292, .9144];

    
  }

  propertyChanged() {
    const property = this.form.get('property').value;

    for (let i = 0; i < this.properties.length; i++) {
      if (property === this.properties[i]) this.propertyIndex = i;
    }

    this.form.get('from').setValue(this.units[this.propertyIndex][0]);
    this.form.get('to').setValue(this.units[this.propertyIndex][1]);

    this.calculate('from', 'to');
  }

  calculate(sourceInput, targetInput) {
    let sourceValue = this.form.get(sourceInput + 'Value').value;

    // First check if the user has given numbers or anything that can be made to one...
    if (isNaN(parseFloat(sourceValue))) return;

    // Converts the contents of the sourceForm input box to the units specified in the targetForm unit menu and puts the result in the targetForm input box.In other words, this is the heart of the whole script...
    let sourceIndex;
    let sourceFactor;
    let targetIndex;
    let targetFactor;
    let result;

    // Let's determine what unit are we converting FROM (i.e. source) and the factor needed to convert that unit to the base unit.
    const unitFrom = this.form.get(sourceInput).value;
    for (let i = 0; i < this.units[this.propertyIndex].length; i++) {
      if (unitFrom === this.units[this.propertyIndex][i]) sourceIndex = i;
    }

    const unitTo = this.form.get(targetInput).value;
    for (let i = 0; i < this.units[this.propertyIndex].length; i++) {
      if (unitTo === this.units[this.propertyIndex][i]) targetIndex = i;
    }


    sourceFactor = this.factors[this.propertyIndex][sourceIndex];
    targetFactor = this.factors[this.propertyIndex][targetIndex];

    // a) convert the source TO the base unit: (The input has been checked by the CalculateUnit function).

    result = this.form.get(sourceInput + 'Value').value;    
    result = result * sourceFactor;

    // not done yet... now, b) use the targetFactor to convert FROM the base unit
    // to the target unit...
    result = result / targetFactor;    
    // Ta-da! All that's left is to update the target input box:
    this.form.get(targetInput + 'Value').setValue(result.toFixed(2));
  }

  ngOnInit() {
    this.propertyIndex = 0;
    this.form = this.fb.group({
      property: [this.properties[this.propertyIndex]],
      from: [this.units[this.propertyIndex][0]],
      to: [this.units[this.propertyIndex][1]],
      fromValue: [],
      toValue: []
    });
  }


}
