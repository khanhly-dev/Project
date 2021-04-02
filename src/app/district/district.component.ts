import { Component, Input, OnInit } from '@angular/core';
import { GetDataServiceService } from '../Service/get-data-service.service';
import { DistrictViewModel } from '../ViewModel/districtViewModel';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  districtList : DistrictViewModel[] =[];

  constructor(private getDataService : GetDataServiceService) { }

  ngOnInit(): void {
  }

  @Input() _districtList : DistrictViewModel[] = [];
}
