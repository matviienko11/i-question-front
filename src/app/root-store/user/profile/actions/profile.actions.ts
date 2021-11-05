import { createAction, props } from '@ngrx/store';

const COMPONENT = 'User-Profile';

export const GetProfile = createAction(`[${ COMPONENT }] Get Profile`);
export const GetProfileSuccess = createAction(`[${ COMPONENT }] Get Profile Success`, props<{ profile: any }>());
export const GetProfileFailure = createAction(`[${ COMPONENT }] Get Profile Failure`, props<{ error: any }>());
