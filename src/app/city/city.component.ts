import { Component, EventEmitter, forwardRef, Input, OnInit, Output, Provider } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DistrictComponent } from '../district/district.component';
import { GetDataServiceService } from '../Service/get-data-service.service';
import { CityViewModel } from '../ViewModel/cityViewModel';
import { DistrictViewModel } from '../ViewModel/districtViewModel';

const provider: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CityComponent),
  multi: true
};

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: [provider]
})
export class CityComponent implements OnInit, ControlValueAccessor {

  constructor(private getDataService: GetDataServiceService) { }


  ngOnInit(): void {
    this.getAllCity();
  }

  cityId: number;

  cityList: CityViewModel[] = [];

  citySelected: string;

  getAllCity(): void {
    this.getDataService.getCityFromServer().subscribe(x => this.cityList = x)
  }

  onCitySelected(event: any) {
    this.citySelected = event.target.value;
    for (let i of this.cityList) {
      if (i.name === this.citySelected) {
        this.cityId = i.id;
      }
    }
    this.onChange(this.citySelected)
    this.onTouched()
  }

  onChange = (value : string) => { };
  onTouched = () => { };

  writeValue(obj: any): void {
    this.citySelected = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
