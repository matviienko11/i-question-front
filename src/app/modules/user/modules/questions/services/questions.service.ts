import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, pluck } from 'rxjs/operators';

import { environment } from '../../../../../../environments/environment';


@Injectable()
export class QuestionsService {

  userId = 'f5b2b73d-adff-4e7e-84a5-5a71f4407067'

  constructor(private http: HttpClient) {
  }

  getAllQuestions() {
    return this.http.get(environment.BASIC_URL + '/questions')
  }

  getQuestion(): Observable<any> {
    return this.http.get(environment.BASIC_URL + `/user-question/game/${ this.userId }`)
      .pipe(
        pluck('question'),
        catchError(error => of(error))
      )
  }

  submitAnswer(questionId: string, answer: string) {
    return this.http.patch(environment.BASIC_URL + `/user-question/${ this.userId }/pending/${ questionId }`, { answer })
  }
}
