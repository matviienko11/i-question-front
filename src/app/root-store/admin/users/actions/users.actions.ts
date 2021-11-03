import { createAction, props } from '@ngrx/store';

const COMPONENT = 'Admin users'

export const GetAllUsers = createAction(`[${ COMPONENT }] Get All Users`);
export const GetAllUsersSuccess = createAction(`[${ COMPONENT }] Get All Users Success`, props<{ users: any }>());
export const GetAllUsersFailure = createAction(`[${ COMPONENT }] Get All Users Failure`, props <{ error: any }>());
