import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { User } from '../../../shared/interfaces/user.interface';
import { ROLES } from '../../../shared/interfaces/roles.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) {
  }

  register(body: User) {
    return this.http.post(environment.BASIC_URL + '/auth/register', body)
  }

  login({ payload }: any) {
    return this.http.post<string>(environment.BASIC_URL + '/auth/login', payload)
      .pipe(
        tap(({ token, userInfo }: any) => {
          this.user = userInfo;
          localStorage.setItem('token', token)
          if (userInfo.role === ROLES.USER) return this.router.navigate(['/user'])
          if (userInfo.role === ROLES.ADMIN) return this.router.navigate(['/admin'])
        }),
        catchError((err) => of(err))
      )
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_info');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
