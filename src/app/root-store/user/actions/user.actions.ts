import { createAction, props } from '@ngrx/store';

const COMPONENT = 'User'

export const GetAllQuestions = createAction(`[${ COMPONENT }] Get All Questions`);
export const GetAllQuestionsSuccess = createAction(`[${ COMPONENT }] Get All Questions Success`, props<{ all_questions: any }>());
export const GetAllQuestionsFailure = createAction(`[${ COMPONENT }] Get All Questions Failure`, props<{ error: any }>());
