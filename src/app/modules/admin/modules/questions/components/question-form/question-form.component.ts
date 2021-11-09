import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { QUESTION_CATEGORY } from '../../../../../../shared/interfaces/question-category.interface';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  form: FormGroup;
  category = QUESTION_CATEGORY;

  constructor(private fb: FormBuilder,
              private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      category: [''],
      question: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  createQuestion() {
    this.questionsService.addQuestion(this.form.value).subscribe()
    this.form.reset();
  }

}
