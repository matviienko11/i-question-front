import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import { selectAll } from '../reducers/all-questions.reducers';
import { STATUS } from '../../../../shared/interfaces/status.enum';

export const userSelector = createFeatureSelector<any>('user');
export const selectQuestionsState = createSelector(userSelector, (state) => state.questions);
export const selectQuestions = createSelector(selectQuestionsState, selectAll);

export const SelectAllPendingQuestions = pipe(
  select(selectQuestions),
  map((questions: any) => questions.filter((question: any) => question.status === STATUS.PENDING)),
)

export const SelectAllAnsweredQuestions = pipe(
  select(selectQuestions),
  map((questions: any) => questions.filter((question: any) => question.status === STATUS.ANSWERED)),
)
