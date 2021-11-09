import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../../environments/environment';

@Injectable()
export class QuestionsService {
  constructor(private http: HttpClient) {
  }

  getAllQuestions(limit: number, page: number) {
    const params = {
      limit,
      page
    }
    return this.http.get(environment.BASIC_URL + '/questions/paginated', { params } )
  }
}
