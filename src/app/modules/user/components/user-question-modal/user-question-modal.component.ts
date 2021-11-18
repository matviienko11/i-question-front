import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Answer } from '../../../../shared/interfaces/answer.interface';
import { RATING } from '../../../../shared/interfaces/rating.interface';
import { UpdateQuestion } from '../../../../root-store/user/all-questions/actions/all-questions.actions';

@Component({
  selector: 'app-question-evaluate-modal',
  templateUrl: './user-question-modal.component.html',
  styleUrls: ['./user-question-modal.component.scss']
})
export class UserQuestionModalComponent implements OnInit {

  answer: Answer;
  ratingSelection = RATING;
  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Answer,
              private fb: FormBuilder,
              private store: Store<any>) {
  }

  ngOnInit(): void {
    this.answer = this.data;
    this.form = this.fb.group({
      difficulty: [this.answer.difficulty],
      rating: [this.answer.rating],
    })
    this.form.valueChanges.pipe(
      map((payload: any) => this.store.dispatch(UpdateQuestion({
          userId: this.answer.userId,
          questionId: this.answer.questionId,
          payload
        }))
      )).subscribe()
  }
}
