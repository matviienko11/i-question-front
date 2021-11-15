import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { QuestionsService } from '../../../../modules/admin/services/questions.service';
import {
  AddQuestion,
  AddQuestionFailure,
  AddQuestionSuccess,
  DeleteQuestion,
  DeleteQuestionFailure,
  DeleteQuestionSuccess,
  EditQuestion, EditQuestionFailure, EditQuestionSuccess,
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

  editQuestion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EditQuestion),
      switchMap(({ question }) => this.questionsService.updateQuestion(question)
        .pipe(
          map(() => EditQuestionSuccess({ question })),
          catchError(error => of(EditQuestionFailure({ error })))
        ))
    )
  })

  deleteQuestion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DeleteQuestion),
      switchMap(({ id }) => this.questionsService.deleteQuestion(id)
        .pipe(
          map(() => DeleteQuestionSuccess({ id })),
          catchError(error => of(DeleteQuestionFailure({ error })))
        ))
    )
  })
}
