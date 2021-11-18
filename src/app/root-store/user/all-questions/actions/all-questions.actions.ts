import { createAction, props } from '@ngrx/store';

const COMPONENT = 'User-Questions'

export const GetAllQuestions = createAction(`[${ COMPONENT }] Get All Questions`, props<{ userId: string }>());
export const GetAllQuestionsSuccess = createAction(`[${ COMPONENT }] Get All Questions Success`, props<{ questions: any }>());
export const GetAllQuestionsFailure = createAction(`[${ COMPONENT }] Get All Questions Failure`, props<{ error: any }>());

export const UpdateQuestion = createAction(`[${ COMPONENT }] Update Question`, props<{ userId: string, questionId: string, payload: any }>());
export const UpdateQuestionSuccess = createAction(`[${ COMPONENT }] Update Question Success`, props<{ question: any }>());
export const UpdateQuestionFailure = createAction(`[${ COMPONENT }] Update Question Failure`, props<{ error: any }>());
