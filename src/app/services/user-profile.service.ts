import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { UserProfile } from '../models/user-profile.model';
@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private usersUrl = 'http://localhost:3000/profile';

  constructor(private http: HttpClient) {}

  getUser(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.usersUrl}`);
  }

  updateUser(user: UserProfile): Observable<UserProfile> {
    return this.http.patch<UserProfile>(`${this.usersUrl}`, user);
  }
}
