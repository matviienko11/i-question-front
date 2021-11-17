import { Component, Input, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Answer } from '../../../../shared/interfaces/answer.interface';
import { QuestionEvaluateModalComponent } from '../question-evaluate-modal/question-evaluate-modal.component';

@Component({
  selector: 'app-user-question-table',
  templateUrl: './user-question-table.component.html',
  styleUrls: ['./user-question-table.component.scss']
})
export class UserQuestionTableComponent implements OnInit {

  @Input() questions: any[];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showEvaluateModal(answer: Answer) {
    const dialogRef = this.dialog.open(QuestionEvaluateModalComponent, {
      data: answer
    })
  }

}
