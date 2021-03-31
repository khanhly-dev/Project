import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DistrictViewModel } from '../ViewModel/districtViewModel';
import { CityViewModel } from '../ViewModel/cityViewModel';

const httpOption ={
  Headers : new Headers({'Content-Type': 'Aplication/Json'})
}

@Injectable({
  providedIn: 'root'
})
export class GetDataServiceService {

  constructor(
    private httpClient : HttpClient
  ) { }

  private cityApiUrl = "https://605c56316d85de00170d9eb0.mockapi.io/city";

  
  getCityFromServer() : Observable<CityViewModel[]>{
    return this.httpClient.get<CityViewModel[]>(this.cityApiUrl).pipe();
  }

  filterCity(term: string): Observable<CityViewModel[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.httpClient.get<CityViewModel[]>
      (`${this.cityApiUrl}/?search=${term}`).pipe()
    // if(term == '')
    // {
    //   return this.httpClient.get<CityViewModel[]>(this.cityApiUrl).pipe();
    // }
    // else
    // {
    //   return this.httpClient.get<CityViewModel[]>
    //   (`${this.cityApiUrl}'?search='${term}`).pipe()
    // }
   
  }



}
