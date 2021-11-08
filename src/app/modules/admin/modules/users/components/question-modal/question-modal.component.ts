import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.scss']
})
export class QuestionModalComponent implements OnInit {

  question: any;
  isApprovable: boolean;

  constructor(public dialogRef: MatDialogRef<QuestionModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.question = this.data.questionData;
    this.isApprovable = this.data.isApprovable;
  }

  ngOnInit(): void {
  }

  handleApprove(questionId: string) {
    this.dialogRef.close(questionId);
  }

}
