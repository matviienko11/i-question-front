import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    return this.http.get(environment.BASIC_URL + '/users')
  }

  getOneUser(id: any) {
    return this.http.get(environment.BASIC_URL + `/users/${ id }`)
  }

  getAllPendingQuestions(userId: string) {
    return this.http.get(environment.BASIC_URL + `/user-question/all-answers/${ userId }/pending`)
  }

  getAllAnsweredQuestions(userId: string) {
    return this.http.get(environment.BASIC_URL + `/user-question/all-answers/${ userId }/answered`)
  }

  approveAnswer(userId: string, questionId: string) {
    return this.http.patch(environment.BASIC_URL + `/user-question/${ userId }/status/${ questionId }`, { status: 'answered' })
  }

  revokeAnsweredStatus(userId: string, questionId: string) {
    return this.http.patch(environment.BASIC_URL + `/user-question/${ userId }/status/${ questionId }`, { status: 'pending' })
  }
}
