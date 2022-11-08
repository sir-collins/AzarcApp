import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers(search: string = ''): Observable<User[]> {
    let params = new HttpParams();
    search ? (params = params.append('q', search.toString().trim())) : null;

    return this.http.get<User[]>(this.usersUrl, { params });
  }

  getUserById(payload: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${payload}`);
  }

  createUser(payload: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, payload);
  }

  updateUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.usersUrl}/${user.id}`, user);
  }

  deleteUser(payload: number) {
    return this.http.delete(`${this.usersUrl}/${payload}`);
  }
}
