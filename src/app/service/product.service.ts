import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../viewModel/productViewModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = "https://605c56316d85de00170d9eb0.mockapi.io/product"
const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  productList: Product[] = [];

  getAllFroduct():Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(ApiUrl).pipe();
  }
}
