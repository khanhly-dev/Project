import { Component, forwardRef, Input, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { GetDataServiceService } from '../Service/get-data-service.service';
import { DistrictViewModel } from '../ViewModel/districtViewModel';

const provider: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ShowDataComponent),
  multi: true
};

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css'],
  providers: [provider]
})
export class ShowDataComponent implements OnInit, ControlValueAccessor {

  constructor(private getDataService : GetDataServiceService) { }

  _selectedDistrict ?: DistrictViewModel[] = [];

  ngOnInit(): void {
    this.GetAllDistict();
  }

  onSelect(selectedDistrict : DistrictViewModel){
     this._selectedDistrict.push(selectedDistrict);
     console.log(this._selectedDistrict)
  }


  districtList : DistrictViewModel[] = [];

  GetAllDistict():void{
    this.getDataService.GetDistrictFromServer().subscribe(a => this.districtList = a)
  }

  private _readonly = false;
  @Input()
  get readonly() {
    return this._readonly;
  }
  set readonly(v: any) {
    if (v === false || v === 'false') {
      this._readonly = false;
    } else {
      this._readonly = true;
    }

  }

  onChange = (v: boolean) => { };
  onTouched = () => { };


  //an theo [(ngmodel)] cua template driven form
  writeValue(value: any) {
    this.readonly = value;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  //an theo disable cua formcontrol
  setDisabledState(isDisabled: boolean) {
    this.readonly = isDisabled;
  }
}
