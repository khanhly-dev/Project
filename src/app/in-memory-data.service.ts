import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CityViewModel } from './ViewModel/cityViewModel';
import { DistrictViewModel } from './ViewModel/districtViewModel';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cityList : CityViewModel[] = [
      { id: 1, name: 'Hà Nội'},
      { id: 2, name: 'TP Hồ Chí Minh'},
      { id: 3, name: 'Đà Nẵng'},
      { id: 4, name: 'Lào Cai'}, 
    ];

    const districtList : DistrictViewModel[] = [
      { id: 1, name: 'hà Đông', cityId : 1 },
      { id: 2, name: 'Thanh Xuân', cityId : 1 },
      { id: 3, name: 'Bình thạnh',cityId : 1 },
      { id: 4, name: 'Quận 2', cityId : 1 },
      { id: 5, name: 'Sapa', cityId : 1},
      { id: 6, name: 'Hải Châu', cityId : 1},
      { id: 7, name: 'Thanh Khê', cityId : 1 },
      { id: 8, name: 'Cầu giấy', cityId : 1 },
    ];
    return {cityList, districtList};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(district: DistrictViewModel[]): number {
    return district.length > 0 ? Math.max(...district.map(a => a.id)) + 1 : 11;
  }
}