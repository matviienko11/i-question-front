import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../../../shared/interfaces/user.interface';
import { Answer } from '../../../../shared/interfaces/answer.interface';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  user: User;
  pending: Answer[];
  answered: Answer[];
  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder) {
    this.user = this.route.parent?.snapshot.data.user;
    this.pending = this.route.snapshot.data.questions.pending;
    this.answered = this.route.snapshot.data.questions.answered;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      first_name: [this.user.first_name],
      last_name: [this.user.last_name],
      email: [this.user.email],
      phone: [this.user.phone]
    })
  }

}
