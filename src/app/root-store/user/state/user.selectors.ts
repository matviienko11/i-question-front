import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserState } from './user.state';

export const userSelector = createFeatureSelector<UserState>('user');
export const selectQuestions = createSelector(userSelector, (state) => state.all_questions);

export const SelectAllQuestions = pipe(
  select(selectQuestions),
  map((questions: any) => questions)
)
