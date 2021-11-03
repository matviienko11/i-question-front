import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { map, pluck } from 'rxjs/operators';
import { pipe } from 'rxjs';

import { AdminUsersState } from './users.state';

export const adminSelector = createFeatureSelector<AdminUsersState>('admin');
export const selectUsers = createSelector(adminSelector, (state) => state.users);

export const SelectAllUsers = pipe(
  select(selectUsers),
  pluck('users'),
  map((users: any) => users)
)
