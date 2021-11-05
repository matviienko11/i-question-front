import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';


export const userSelector = createFeatureSelector<any>('user');
export const selectQuestions = createSelector(userSelector, (state) => state.all_questions);

export const SelectAllQuestions = pipe(
  select(selectQuestions),
  map(({ questions }: any) => questions)
)
