import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DistrictViewModel } from '../ViewModel/districtViewModel';

const apiUrl = "https://605c56316d85de00170d9eb0.mockapi.io/product"
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

  GetDistrictFromServer() : Observable<DistrictViewModel[]>{
    return this.httpClient.get<DistrictViewModel[]>(apiUrl).pipe();
  }

  // searchHeroes(term: string): Observable<DistrictViewModel[]> {
  //   if (!term.trim()) {
  //     return of([]);
  //   }
  //   return this.httpClient.get<DistrictViewModel[]>
  //     (`${this.heroesUrl}/?name=${term}`).pipe()

  // }
}
