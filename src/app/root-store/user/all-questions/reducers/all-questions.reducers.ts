import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import {
  GetAllQuestions,
  GetAllQuestionsFailure,
  GetAllQuestionsSuccess,
  UpdateQuestion, UpdateQuestionFailure, UpdateQuestionSuccess
} from '../actions/all-questions.actions';

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({});
export const initialState = adapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(
    GetAllQuestions,
    UpdateQuestion,
    (state) => {
      return {
        ...state
      }
    }),
  on(
    GetAllQuestionsFailure,
    UpdateQuestionFailure,
    (state, { error }) => {
      return {
        ...state,
        error
      }
    }),
  on(GetAllQuestionsSuccess, (state, { questions }) => {
    return adapter.setAll(questions, { ...state })
  }),
  on(UpdateQuestionSuccess, (state, { question }) => {
    return adapter.upsertOne(question, state)
  })
)

export const { selectAll } = adapter.getSelectors()

export function allQuestionsReducer(state: any | undefined, action: Action) {
  return reducer(state, action);
}
