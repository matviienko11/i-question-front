import { Action, createReducer, on } from '@ngrx/store';

import { GetUserInfo, GetUserInfoFailure, GetUserInfoSuccess } from '../actions/auth.actions';
import { User } from '../../../shared/interfaces/user.interface';

const initialState: User = JSON.parse(localStorage.getItem('user_info') || '{}');
const reducer = createReducer(
  initialState,
  on(GetUserInfo, (state) => {
    return {
      ...state,
    }
  }),
  on(GetUserInfoFailure, (state, { error }) => {
    return {
      ...state,
      error
    }
  }),
  on(GetUserInfoSuccess, (state, { userInfo }) => {
    localStorage.setItem('user_info', JSON.stringify(userInfo))
    return {
      ...state,
      ...userInfo
    }
  })
)

export function userInfoReducer(state: any, action: Action) {
  return reducer(state, action);
}
