import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { QuestionsService } from '../../../../modules/user/services/questions.service';
import { GetAllQuestions, GetAllQuestionsFailure, GetAllQuestionsSuccess } from '../actions/all-questions.actions';

@Injectable()
export class AllQuestionsEffects {
  constructor(private actions$: Actions,
              private questionsService: QuestionsService) {
  }

  getAllQuestion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetAllQuestions),
      switchMap(() => this.questionsService.getAllQuestions()
        .pipe(
          map((questions) => GetAllQuestionsSuccess({ questions })),
          catchError(error => of(GetAllQuestionsFailure({ error })))
        ))
    )
  })
}
