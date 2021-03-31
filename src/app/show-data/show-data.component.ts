import { Component, forwardRef, Input, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { GetDataServiceService } from '../Service/get-data-service.service';
import { CityViewModel } from '../ViewModel/cityViewModel';
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

  cityList : CityViewModel[] = [];

  districtList : DistrictViewModel[] =[];

  citySelected : string ;

  constructor(private getDataService : GetDataServiceService) { }

  ngOnInit(): void {
    this.getAllCity();
    
  }

  getAllCity():void{
    this.getDataService.getCityFromServer().subscribe(x => this.cityList = x)
  }

  getDistrictByCity(id : number ):void{
   
    for(let i of this.cityList)
    {
      if(i.name === this.citySelected)
      {
        id = i.id;
        this.getDataService.getDistrictById(id).subscribe(x => this.districtList = x)
      }
    }
    
  }

  onSelected(event : any){
    this.citySelected = event.target.value;
    console.log(this.citySelected)
    this.getDistrictByCity(1);
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
