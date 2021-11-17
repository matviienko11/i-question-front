import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, pluck } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';


@Injectable()
export class QuestionsService {

  constructor(private http: HttpClient) {
  }

  getAllQuestions() {
    return this.http.get(environment.BASIC_URL + '/questions')
  }

  getQuestion(userId: string): Observable<any> {
    return this.http.get(environment.BASIC_URL + `/user-question/game/${ userId }`)
      .pipe(
        catchError(error => of(error))
      )
  }

  submitAnswer(userId: string, questionId: string, answer: string) {
    return this.http.patch(environment.BASIC_URL + `/user-question/${ userId }/pending/${ questionId }`, { answer })
  }

  getAllPendingQuestions(userId: string) {
    return this.http.get(environment.BASIC_URL + `/user-question/all-answers/${ userId }/pending`)
  }

  getAllAnsweredQuestions(userId: string) {
    return this.http.get(environment.BASIC_URL + `/user-question/all-answers/${ userId }/answered`)
  }

  setStat(userId: string, questionId: string, payload: any) {
    return this.http.patch(environment.BASIC_URL + `/user-question/${ userId }/set-stat/${ questionId }`, payload)
  }
}
