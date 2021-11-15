import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { forkJoin, Observable } from 'rxjs';

import { UsersService } from '../services/users.service';

@Injectable()
export class UserPageResolver implements Resolve<any> {

  constructor(private usersService: UsersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return forkJoin({
      user: this.usersService.getOneUser(route.params.id),
      pending: this.usersService.getAllPendingQuestions(route.params.id),
      answered: this.usersService.getAllAnsweredQuestions(route.params.id)
    })
  }
}
