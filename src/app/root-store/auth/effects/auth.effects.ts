import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '../../../modules/auth/services/auth.service';
import { GetUserInfo, GetUserInfoFailure, GetUserInfoSuccess } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,
              private authService: AuthService) {
  }

  getUserInfo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetUserInfo),
      switchMap(({ payload }) => this.authService.login({ payload })
        .pipe(
          map(({ userInfo }) => GetUserInfoSuccess({ userInfo })),
          catchError(error => of(GetUserInfoFailure({ error })))
        ))
    )
  })
}
