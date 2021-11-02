import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  styleUrls: ['./login.components.scss'],
  template: `
    <div class="login_page">
      <app-auth-from></app-auth-from>
    </div>
  `,
})
export class LoginComponent {

}
