import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Question } from '../../../shared/interfaces/question.interface';

@Injectable()
export class QuestionsService {
  constructor(private http: HttpClient) {
  }

  getAllQuestions(limit: number, page: number, dir: string = 'asc', search: string = '') {
    const params = {
      limit,
      page,
      search,
      question: dir
    }
    return this.http.get(environment.BASIC_URL + '/questions/paginated', { params })
  }

  addQuestion(question: Question) {
    return this.http.post(environment.BASIC_URL + '/questions/new-question', question);
  }

  updateQuestion(question: Question) {
    return this.http.patch(environment.BASIC_URL + `/questions/${ question.id }`, question)
  }

  deleteQuestion(id: string) {
    return this.http.delete(environment.BASIC_URL + `/questions/${ id }`)
  }
}
