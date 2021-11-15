import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { AdminQuestionsState } from './questions.state';

export const adminSelector = createFeatureSelector<AdminQuestionsState>('admin');
export const selectQuestions = createSelector(adminSelector, (state) => state.questions);

export const SelectAllQuestions = pipe(
  select(selectQuestions),
  filter(data => !!data),
  map((questions: any) => questions)
)
