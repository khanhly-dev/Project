import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Service } from '../viewModel/serviceViewModel';

const ApiUrl = "https://605c56316d85de00170d9eb0.mockapi.io/product"
const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient : HttpClient) { }

  serviceList: Service[] = [];

  getAllService():Observable<Service[]>
  {
    return this.httpClient.get<Service[]>(ApiUrl).pipe();
  }
}
