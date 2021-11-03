import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { UsersService } from '../services/users.service';

@Injectable()
export class UserPageResolver implements Resolve<any> {

  constructor(private usersService: UsersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.usersService.getOneUser(route.params.id);
  }
}
