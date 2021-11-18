import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { User } from '../../../../shared/interfaces/user.interface';
import { Answer } from '../../../../shared/interfaces/answer.interface';
import { GetAllQuestions } from '../../../../root-store/user/all-questions/actions/all-questions.actions';
import { SelectAllAnsweredQuestions, SelectAllPendingQuestions } from '../../../../root-store/user/all-questions/state/all-questions.selectors';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  user: User;
  pending$: Observable<Answer[]>;
  answered$: Observable<Answer[]>;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private store: Store<any>) {
    this.user = this.route.parent?.snapshot.data.user;
    this.store.dispatch(GetAllQuestions({ userId: this.user.id }));
  }

  ngOnInit(): void {
    this.pending$ = this.store.pipe(SelectAllPendingQuestions);
    this.answered$ = this.store.pipe(SelectAllAnsweredQuestions);
    this.form = this.fb.group({
      first_name: [this.user.first_name],
      last_name: [this.user.last_name],
      email: [this.user.email],
      phone: [this.user.phone]
    })
  }

}
