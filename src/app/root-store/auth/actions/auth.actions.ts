import { createAction, props } from '@ngrx/store';

const COMPONENT = 'User Info';

export const GetUserInfo = createAction(`[${ COMPONENT }] Get User Info`, props<{ email: string }>());
export const GetUserInfoSuccess = createAction(`[${ COMPONENT }] Get User Info Success`, props<{ user: any }>());
export const GetUserInfoFailure = createAction(`[${ COMPONENT }] Get User Info Failure`, props<{ error: any }>());
