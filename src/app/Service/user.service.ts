import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserViewModel } from '../ViewModel/userViewModel';

const httpOptions = {
  headers : new  HttpHeaders ({'Content-type' : 'Aplication/Json'})
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  private apiUrl = "https://605c56316d85de00170d9eb0.mockapi.io/user";

  getUserFromServer(): Observable<UserViewModel[]>{
    return this.httpClient.get<UserViewModel[]>(this.apiUrl).pipe();
  }

  deleteUser(id :number): Observable<UserViewModel>{
    return this.httpClient.delete<UserViewModel>(`${this.apiUrl}/${id}`, httpOptions).pipe();
  }

  getById(id : number) : Observable<UserViewModel>
  {
    return this.httpClient.get<UserViewModel>(`${this.apiUrl}/${id}`).pipe();
  }

  updateUser(user : UserViewModel): Observable<any>
  {
    return this.httpClient.put<UserViewModel>(`${this.apiUrl}/${user.id}`, user).pipe();
  }

  addUser(user : UserViewModel) : Observable<UserViewModel>
  {
    return this.httpClient.post<UserViewModel>(this.apiUrl, user).pipe();
  }
}
