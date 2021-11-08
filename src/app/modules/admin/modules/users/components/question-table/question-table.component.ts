import { Component, Input, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { mergeMap, tap } from 'rxjs/operators';

import { QuestionModalComponent } from '../question-modal/question-modal.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-question-table',
  templateUrl: './question-table.component.html',
  styleUrls: ['./question-table.component.scss']
})
export class QuestionTableComponent implements OnInit {

  @Input() userId: string;
  @Input() questions: any;
  @Input() approvable: boolean;

  displayedColumns = ['question', 'answer'];

  constructor(private dialog: MatDialog,
              private usersService: UsersService) {
  }

  ngOnInit(): void {
  }

  showModal(questionData: any) {
    this.dialog.open(QuestionModalComponent, {
      data: { questionData, isApprovable: this.approvable }
    }).afterClosed()
      .pipe(
        mergeMap(({ questionId, approvable }) => {
          if(approvable) {
            return this.usersService.approveAnswer(this.userId, questionId)
          } else {
            return this.usersService.revokeAnsweredStatus(this.userId, questionId)
          }
        })
      )
      .subscribe()
  }

}
