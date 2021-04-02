import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import { DistrictComponent } from '../district/district.component';
import { GetDataServiceService } from '../Service/get-data-service.service';
import { CityViewModel } from '../ViewModel/cityViewModel';
import { DistrictViewModel } from '../ViewModel/districtViewModel';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private getDataService : GetDataServiceService) { }

  ngOnInit(): void {
    this.getAllCity();
  }

  cityId : number;

  cityList : CityViewModel[] = [];

  districtList : DistrictViewModel[] = [];

  citySelected : string;

  getAllCity():void{
    this.getDataService.getCityFromServer().subscribe(x => this.cityList = x)
  }

  onSelected(event : any){
    this.citySelected = event.target.value;
    for(let i of this.cityList)
    {
      if(i.name === this.citySelected)
      {
        this.cityId = i.id;
      }
    }
    console.log(this.cityId)
    this.getDataService.getDistrictByCityId(this.cityId).subscribe(a => this.districtList = a)
  }

}
