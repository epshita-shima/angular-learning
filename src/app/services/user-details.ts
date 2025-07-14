import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetailsModel } from '../models/userDetails.model';
import { User } from '../lifecycle-hook/home/user/user';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserDetailsModel[]> {
    return this.http.get<UserDetailsModel[]>(this.apiUrl);
  }

  addUser(user: UserDetailsModel): Observable<UserDetailsModel> {
    return this.http.post<UserDetailsModel>(this.apiUrl, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}}`);
  }
}
