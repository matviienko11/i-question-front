import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Question } from '../../../../../shared/interfaces/question.interface';
import { QUESTION_CATEGORY } from '../../../../../shared/interfaces/question-category.interface';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  form: FormGroup;
  question: Question;
  category = QUESTION_CATEGORY;


  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<EditModalComponent>) { }

  ngOnInit(): void {
    this.question = this.data.question;
    this.form = this.fb.group({
      id: [this.question.id],
      category: [this.question.category],
      question: [this.question.question, [Validators.required, Validators.minLength(10)]]
    })
  }

  updateQuestion() {
    this.dialogRef.close(this.form.value);
  }
}
