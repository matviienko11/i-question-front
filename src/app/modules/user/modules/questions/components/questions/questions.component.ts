import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { GetAllQuestions } from '../../../../../../root-store/user/actions/user.actions';
import { SelectAllQuestions } from '../../../../../../root-store/user/state/user.selectors';
import { Question } from '../../../../../../shared/interfaces/question.interface';
import { AnswerModalComponent } from '../answer-modal/answer-modal.component';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions$: Observable<any> = this.store.pipe(SelectAllQuestions)

  constructor(private store: Store<any>,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.store.dispatch(GetAllQuestions())
  }

  openAnswerModal(question: Question) {
    const dialogRef = this.dialog.open(AnswerModalComponent, {
      width: '60%',
      height: '60%',
      data: question
    }).afterClosed()
      .pipe(
        filter(Boolean),
        tap(data => console.log(data))
      ).subscribe()
  }

}
