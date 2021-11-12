import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { map, pluck, tap } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { ROLES } from '../../../../shared/interfaces/roles.enum';
import { GetUserInfo } from '../../../../root-store/auth/actions/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private store: Store<any>) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  handleLogin() {
    this.store.dispatch(GetUserInfo({ payload: this.form.value }))
  }
}
