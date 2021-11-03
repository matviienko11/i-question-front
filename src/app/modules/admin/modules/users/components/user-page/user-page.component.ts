import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { User } from '../../../../../../shared/interfaces/user.interface';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  user: User;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.user = this.route.snapshot.data.user;
    this.form = this.fb.group({
      first_name: [this.user.first_name],
      last_name: [this.user.last_name],
      phone: [this.user.phone],
      email: [this.user.email]
    })
  }
}
