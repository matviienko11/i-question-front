import { Action, createAction, createReducer, on } from '@ngrx/store';

import { GetAllQuestions, GetAllQuestionsFailure, GetAllQuestionsSuccess } from '../actions/questions.actions';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export const adapter: EntityAdapter<any> = createEntityAdapter<any>()
export const initialState = adapter.getInitialState();

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
    return adapter.setAll(questions.data, {
      ...state,
      count: questions.count,
      page: questions.page,
      totalPages: questions.totalPages
    })
  })
)

export const { selectAll } = adapter.getSelectors()

export function questionsReducer(state: any | undefined, action: Action) {
  return reducer(state, action);
}
