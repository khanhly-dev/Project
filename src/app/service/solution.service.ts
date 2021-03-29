import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solution } from '../viewModel/solutionViewModel';

const ApiUrl = "https://605c56316d85de00170d9eb0.mockapi.io/product"
const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  constructor( private httpClient : HttpClient) { }

  solutionList:Solution[] = [];

  getAllSolution():Observable<Solution[]>
  {
    return this.httpClient.get<Solution[]>(ApiUrl).pipe();
  }
}
