import { createAction, props } from '@ngrx/store';

const COMPONENT = 'User-Questions'

export const GetAllQuestions = createAction(`[${ COMPONENT }] Get All Questions`, props<{ userId: string }>());
export const GetAllQuestionsSuccess = createAction(`[${ COMPONENT }] Get All Questions Success`, props<{ questions: any }>());
export const GetAllQuestionsFailure = createAction(`[${ COMPONENT }] Get All Questions Failure`, props<{ error: any }>());
