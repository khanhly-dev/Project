import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DistrictViewModel } from '../ViewModel/districtViewModel';
import { CityViewModel } from '../ViewModel/cityViewModel';

const httpOption = {
  Headers: new Headers({ 'Content-Type': 'Aplication/Json' })
}

@Injectable({
  providedIn: 'root'
})
export class GetDataServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private ApiUrl = "https://605c56316d85de00170d9eb0.mockapi.io";


  getCityFromServer(): Observable<CityViewModel[]> {
    return this.httpClient.get<CityViewModel[]>(`${this.ApiUrl}/city`).pipe();
  }

  getDistrictByCityId(id: number): Observable<DistrictViewModel[]> {
    return this.httpClient.get<DistrictViewModel[]>(`${this.ApiUrl}/city/${id}/district`).pipe();
  }

}
