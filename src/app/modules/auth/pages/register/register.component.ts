import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  styleUrls: ['./register.component.scss'],
  template: `
    <div class="register_page">
      <app-auth-from [isRegister]="true"></app-auth-from>
    </div>
  `,

})
export class RegisterComponent {

}
