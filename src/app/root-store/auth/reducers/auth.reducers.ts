import { Action, createReducer, on } from '@ngrx/store';

import { GetUserInfo, GetUserInfoFailure, GetUserInfoSuccess } from '../actions/auth.actions';

export const initialState = {};

const reducer = createReducer(
  initialState,
  on(GetUserInfo, (state) => {
    return {
      ...state
    }
  }),
  on(GetUserInfoFailure, (state, { error }) => {
    return {
      ...state,
      error
    }
  }),
  on(GetUserInfoSuccess, (state, { user }) => {
    return {
      ...state,
      user
    }
  })
)

export function userInfoReducer(state: any | undefined, action: Action) {
  return reducer(state, action);
}
