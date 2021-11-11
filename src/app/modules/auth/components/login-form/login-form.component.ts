import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { map, pluck, tap } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { ROLES } from '../../../../shared/interfaces/roles.enum';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  handleLogin() {
    // this.store.dispatch(GetUserInfo(this.form.value))
    this.authService.login(this.form.value).pipe(
      tap(() => this.form.reset()),
      pluck('userInfo'),
      map((user) => {
        if(user.role === ROLES.USER) return this.router.navigate(['/user'])
        if(user.role === ROLES.ADMIN) return this.router.navigate(['/admin'])
      }),
    ).subscribe()
  }
}
