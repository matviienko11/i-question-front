import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import {
  AddQuestion, AddQuestionFailure, AddQuestionSuccess,
  GetAllQuestions,
  GetAllQuestionsFailure,
  GetAllQuestionsSuccess
} from '../actions/questions.actions';
import { Question } from '../../../../shared/interfaces/question.interface';

export function sortByDate(a: Question, b: Question) {
  const date1 = new Date(a.createdAt);
  const date2 = new Date(b.createdAt);
  return date2.getTime() - date1.getTime()
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({
  sortComparer: sortByDate
});
export const initialState = adapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(GetAllQuestions, AddQuestion, (state) => {
    return {
      ...state
    }
  }),
  on(GetAllQuestionsFailure, AddQuestionFailure, (state, { error }) => {
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
  }),
  on(AddQuestionSuccess, (state, { question }) => {
    return adapter.addOne(question, { ...state })
  })
)

export const { selectAll } = adapter.getSelectors()

export function questionsReducer(state: any | undefined, action: Action) {
  return reducer(state, action);
}
