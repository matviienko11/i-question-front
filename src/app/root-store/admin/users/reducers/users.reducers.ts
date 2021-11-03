import { Action, createReducer, on } from '@ngrx/store';

import { GetAllUsers, GetAllUsersFailure, GetAllUsersSuccess } from '../actions/users.actions';

export const initialState = {};

const reducer = createReducer(
  initialState,
  on(GetAllUsers, (state) => {
    return {
      ...state
    }
  }),
  on(GetAllUsersFailure, (state, { error }) => {
    return {
      ...state,
      error
    }
  }),
  on(GetAllUsersSuccess, (state, { users }) => {
    return {
      ...state,
      users
    }
  })
)

export function usersReducer(state: any | undefined, action: Action) {
  return reducer(state, action);
}
