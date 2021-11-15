import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { QUESTION_CATEGORY } from '../../../../../shared/interfaces/question-category.interface';
import { QuestionsService } from '../../../services/questions.service';
import { AddQuestion } from '../../../../../root-store/admin/questions/actions/questions.actions';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  form: FormGroup;
  category = QUESTION_CATEGORY;

  constructor(private fb: FormBuilder,
              private questionsService: QuestionsService,
              private store: Store<any>) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      category: [''],
      question: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  createQuestion() {
    this.store.dispatch(AddQuestion({ question: this.form.value }))
    this.form.reset();
  }

}
