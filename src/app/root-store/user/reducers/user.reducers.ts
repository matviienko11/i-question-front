import { Action, createReducer, on } from '@ngrx/store';
import { GetAllQuestionsFailure, GetAllQuestionsSuccess } from '../actions/user.actions';

export const initialState = {};

const reducer = createReducer(
  initialState,
  on(GetAllQuestionsSuccess, (state) => {
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
  on(GetAllQuestionsSuccess, (state, { all_questions }) => {
    return {
      ...state,
      all_questions
    }
  })
)

export function userReducer(state: any | undefined, action: Action) {
  return reducer(state, action);
}
