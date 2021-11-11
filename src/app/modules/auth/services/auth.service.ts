import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { User } from '../../../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  register(body: User) {
    return this.http.post(environment.BASIC_URL + '/auth/register', body)
  }

  login(body: User) {
    return this.http.post<string>(environment.BASIC_URL + '/auth/login', body)
      .pipe(
        tap(({ token }: any) => localStorage.setItem('token', token)),
        catchError((err) => of(err))
      )
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserInfo(email: string) {
    return this.http.post(environment.BASIC_URL + '/auth/user-info', { email })
  }
}
