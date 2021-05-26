import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConversionProperty } from '../../../app-common/enums/conversion-enum';
import { ConversionOptions } from '../../../app-common/enums/conversion-types-enum';

@Component({
  selector: 'app-conversion-menu',
  templateUrl: './conversion-menu.component.html',
  styleUrls: ['./conversion-menu.component.scss']
})
export class ConversionMenuComponent implements OnInit {
  selectedCon  ='None';
  public conversionEnumOptions = ConversionOptions;
  selectedConversion = ConversionOptions;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  toConvertCurrency(): void {
    this.router.navigate(['../currency'], { relativeTo: this.activatedRoute });
  }

  toConvertLength(): void {
    this.router.navigate(['../length'], { relativeTo: this.activatedRoute });
  }

  

}
