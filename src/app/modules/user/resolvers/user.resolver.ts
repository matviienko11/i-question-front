import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { SelectUserInfo } from '../../../root-store/auth/selectors/auth.selectors';


@Injectable()
export class UserResolver implements Resolve<any> {

  constructor(public store: Store<any>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      SelectUserInfo,
      map(({ id }) => id),
      take(1)
    )
  }
}
