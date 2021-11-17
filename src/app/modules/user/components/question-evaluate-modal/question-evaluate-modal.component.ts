import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Answer } from '../../../../shared/interfaces/answer.interface';

@Component({
  selector: 'app-question-evaluate-modal',
  templateUrl: './question-evaluate-modal.component.html',
  styleUrls: ['./question-evaluate-modal.component.scss']
})
export class QuestionEvaluateModalComponent implements OnInit {

  answer: Answer;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Answer,
              public dialogRef: MatDialogRef<QuestionEvaluateModalComponent>) { }

  ngOnInit(): void {
    this.answer = this.data
  }

}
