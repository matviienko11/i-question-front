import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Answer } from '../../../../shared/interfaces/answer.interface';
import { RATING } from '../../../../shared/interfaces/rating.interface';
import { QuestionsService } from '../../services/questions.service';
import { map, switchMap } from 'rxjs/operators';

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
              public dialogRef: MatDialogRef<UserQuestionModalComponent>,
              private fb: FormBuilder,
              private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.answer = this.data;
    this.form = this.fb.group({
      difficulty: [this.answer.difficulty],
      rating: [this.answer.rating],
    })
    this.form.valueChanges.pipe(
      switchMap((data) => this.questionsService.setStat(this.answer.userId, this.answer.questionId, data)
      )).subscribe()


}}
