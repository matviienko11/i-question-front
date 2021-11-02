import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, pluck, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { User } from '../../../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(body: User) {
    return this.http.post(environment.BASIC_URL + '/users/register', body)
  }

  login(body: User) {
    return this.http.post<string>(environment.BASIC_URL + '/auth/login',body)
      .pipe(
        pluck('token'),
        tap((token: any) => localStorage.setItem('token', token)),
        catchError(() => of([]) )
      )
  }
}
