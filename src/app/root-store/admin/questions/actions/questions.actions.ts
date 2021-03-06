import { createAction, props } from '@ngrx/store';

const COMPONENT = 'Admin questions'

export const GetAllQuestions = createAction(`[${ COMPONENT }] Get All Questions`, props<{ limit: number, page: number, dir: string, search: string }>());
export const GetAllQuestionsSuccess = createAction(`[${ COMPONENT }] Get All Questions Success`, props<{ questions: any }>());
export const GetAllQuestionsFailure = createAction(`[${ COMPONENT }] Get All Questions Failure`, props<{ error: any }>());

export const AddQuestion = createAction(`[${ COMPONENT }] Add Question`, props<{ question: any }>());
export const AddQuestionSuccess = createAction(`[${ COMPONENT }] Add Question Success`, props<{ question: any }>());
export const AddQuestionFailure = createAction(`[${ COMPONENT }] Add Question Failure`, props<{ error: any }>());

export const EditQuestion = createAction(`[${ COMPONENT }] Edit Question`, props<{ question: any }>());
export const EditQuestionSuccess = createAction(`[${ COMPONENT }] Edit Question Success`, props<{ question: any }>());
export const EditQuestionFailure = createAction(`[${ COMPONENT }] Edit Question Failure`, props<{ error: any }>());

export const DeleteQuestion = createAction(`[${ COMPONENT }] Delete Question`, props<{ id: string }>());
export const DeleteQuestionSuccess = createAction(`[${ COMPONENT }] Delete Question Success`, props<{ id: string }>());
export const DeleteQuestionFailure = createAction(`[${ COMPONENT }] Delete Question Failure`, props<{ error: any }>());
