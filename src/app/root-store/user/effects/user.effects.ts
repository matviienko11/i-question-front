import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '../../../modules/admin/modules/users/services/users.service';
import { QuestionsService } from '../../../modules/user/modules/questions/services/questions.service';
import { GetAllQuestions, GetAllQuestionsFailure, GetAllQuestionsSuccess } from '../actions/user.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions,
              private questionsService: QuestionsService) {
  }

  getAllQuestion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetAllQuestions),
      switchMap(() => this.questionsService.getAllQuestions()
        .pipe(
          map((all_questions) => GetAllQuestionsSuccess({ all_questions })),
          catchError(error => of(GetAllQuestionsFailure({ error })))
        ))
    )
  })
}
