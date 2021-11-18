import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { QuestionsService } from '../../../../modules/user/services/questions.service';
import {
  GetAllQuestions,
  GetAllQuestionsFailure,
  GetAllQuestionsSuccess,
  UpdateQuestion, UpdateQuestionFailure, UpdateQuestionSuccess
} from '../actions/all-questions.actions';

@Injectable()
export class AllQuestionsEffects {
  constructor(private actions$: Actions,
              private questionsService: QuestionsService) {
  }

  getAllQuestion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetAllQuestions),
      switchMap(({ userId }) => this.questionsService.getAllQuestionsByUser(userId)
        .pipe(
          map((questions) => GetAllQuestionsSuccess({ questions })),
          catchError(error => of(GetAllQuestionsFailure({ error })))
        ))
    )
  })

  updateQuestion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UpdateQuestion),
      switchMap(({ userId, questionId, payload }) => this.questionsService.setStat(userId, questionId, payload)
        .pipe(
          map((question) => UpdateQuestionSuccess({ question })),
          catchError(error => of(UpdateQuestionFailure({ error })))
        ))
    )
  })
}
