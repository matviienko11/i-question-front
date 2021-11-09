import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {
  }

  getAllQuestions() {
    return this.http.get(environment.BASIC_URL + '/questions')
  }

  getAllUsers() {
    return this.http.get(environment.BASIC_URL + '/users')
  }
}
