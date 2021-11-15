import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { QuestionsService } from '../../../../modules/admin/services/questions.service';
import {
  AddQuestion, AddQuestionFailure, AddQuestionSuccess,
  GetAllQuestions,
  GetAllQuestionsFailure,
  GetAllQuestionsSuccess
} from '../actions/questions.actions';

@Injectable()
export class QuestionsEffects {
  constructor(private questionsService: QuestionsService, private actions$: Actions) {
  }

  getAllQuestions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetAllQuestions),
      switchMap(({ limit, page }) => this.questionsService.getAllQuestions(limit, page)
        .pipe(
          map(questions => GetAllQuestionsSuccess({ questions })),
          catchError(error => of(GetAllQuestionsFailure({ error })))
        ))
    )
  })

  addQuestion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddQuestion),
      switchMap(({ question }) => this.questionsService.addQuestion(question)
        .pipe(
          map(question => AddQuestionSuccess({ question })),
          catchError(error => of(AddQuestionFailure({ error })))
        ))
    )
  })
}
