import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { AdminQuestionsState } from './questions.state';
import { selectAll } from '../reducers/questions.reducers';

export const adminSelector = createFeatureSelector<AdminQuestionsState>('admin');
export const selectQuestionsState = createSelector(adminSelector, (state) => {
  return state.questions
});
export const selectQuestions = createSelector(selectQuestionsState, selectAll);
export const selectCount = createSelector(selectQuestionsState, ({ count }) => count);

export const SelectAllQuestions = pipe(
  select(selectQuestions),
  filter(data => !!data),
  map((questions: any) => questions)
)

export const SelectCount = pipe(
  select(selectCount),
  map((data) => data)
)
