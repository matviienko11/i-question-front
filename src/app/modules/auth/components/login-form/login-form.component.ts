import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  handleLogin() {
    this.authService.login(this.form.value).subscribe();
    this.form.reset();
  }
}
