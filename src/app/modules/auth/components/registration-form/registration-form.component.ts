import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { samePasswordValidator } from '../../../../shared/validators/same-password.validator';
import { SnackbarService } from '../../../../shared/services/snackbar.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private snackBarService: SnackbarService ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
        first_name: ['', [Validators.required]],
        last_name: ['', [Validators.required]],
        password: ['', [Validators.required]],
        password_confirm: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.pattern('[- +()0-9]{11,}')]],
        email: ['', [Validators.required]],
      },
      { validators: samePasswordValidator }
    )
  }

  handleRegistration() {
    this.authService.register(this.form.value).pipe(
      map(() => this.router.navigate(['/auth/login'])),
      catchError(err => of(this.snackBarService.openSnackbar(err.error.message, 'Confirm')))
    )
      .subscribe()
    this.form.reset();

  }
}
