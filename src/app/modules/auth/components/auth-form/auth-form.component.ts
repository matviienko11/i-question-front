import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-from',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  @Input() isRegister: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
