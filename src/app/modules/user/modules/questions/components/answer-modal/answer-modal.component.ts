import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Question } from '../../../../../../shared/interfaces/question.interface';

@Component({
  selector: 'app-answer-modal',
  templateUrl: './answer-modal.component.html',
  styleUrls: ['./answer-modal.component.scss']
})
export class AnswerModalComponent implements OnInit {

  answer: string = '';
  question: Question;

  constructor(public dialogRef: MatDialogRef<AnswerModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Question) {
    this.question = this.data
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close(this.answer)
  }

}
