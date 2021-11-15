import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { UsersService } from '../../../../modules/admin/services/users.service';
import { GetAllUsers, GetAllUsersFailure, GetAllUsersSuccess } from '../actions/users.actions';


@Injectable()
export class UsersEffects {
  constructor(private usersService: UsersService, private actions$: Actions) {
  }

  getAllUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetAllUsers),
      switchMap(() => this.usersService.getAllUsers()
        .pipe(
          map(users => GetAllUsersSuccess({ users })),
          catchError(error => of(GetAllUsersFailure({ error })))
        ))
    )
  })
}
