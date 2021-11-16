import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { forkJoin } from 'rxjs';

import { QuestionsService } from '../services/questions.service';
import { pluck } from 'rxjs/operators';

@Injectable()
export class UserQuestionResolver implements Resolve<any> {

  constructor(public questionsService: QuestionsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const userId = route.parent?.data.user.id;
    return forkJoin({
      pending: this.questionsService.getAllPendingQuestions(userId),
      answered: this.questionsService.getAllAnsweredQuestions(userId)
    })
  }
}
