import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../../environments/environment';

@Injectable()
export class QuestionsService {

  userId = 'a73f2fad-4c4d-4e12-96a3-0710117fdda1'

  constructor(private http: HttpClient) {
  }

  getAllQuestions() {
    return this.http.get(environment.BASIC_URL + '/questions')
  }

  submitAnswer(questionId: string, answer: string) {
    return this.http.post(environment.BASIC_URL + `/answers/${ this.userId }/submit/${ questionId }`, { answer })
  }
}
