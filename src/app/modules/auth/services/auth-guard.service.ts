import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  isAuth: boolean;

  constructor(private router: Router, private authService: AuthService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.isAuth = this.authService.isAuthenticated();
    if (!this.isAuth) {
      this.router.navigate(['auth/login'])
      return false
    }
    return true
  }
}
