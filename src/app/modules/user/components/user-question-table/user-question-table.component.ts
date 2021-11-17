import { Component, Input, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Answer } from '../../../../shared/interfaces/answer.interface';
import { UserQuestionModalComponent } from '../user-question-modal/user-question-modal.component';

@Component({
  selector: 'app-user-question-table',
  templateUrl: './user-question-table.component.html',
  styleUrls: ['./user-question-table.component.scss']
})
export class UserQuestionTableComponent implements OnInit {

  @Input() questions: any[];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  showEvaluateModal(answer: Answer) {
    const dialogRef = this.dialog.open(UserQuestionModalComponent, {
      data: answer,
      width: '50%',
      height: '50%'
    })
  }

}
