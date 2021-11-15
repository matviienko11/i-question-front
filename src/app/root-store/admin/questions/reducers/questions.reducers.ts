import { Action, createReducer, on } from '@ngrx/store';

import { GetAllQuestions, GetAllQuestionsFailure, GetAllQuestionsSuccess } from '../actions/questions.actions';

export const initialState = {};

const reducer = createReducer(
  initialState,
  on(GetAllQuestions, (state) => {
    return {
      ...state
    }
  }),
  on(GetAllQuestionsFailure, (state, { error }) => {
    return {
      ...state,
      error
    }
  }),
  on(GetAllQuestionsSuccess, (state, { questions }) => {
    return {
      ...state,
      ...questions
    }
  })
)

export function questionsReducer(state: any | undefined, action: Action) {
  return reducer(state, action);
}
