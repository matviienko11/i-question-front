import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap } from 'rxjs/operators';

import { Question } from '../../../../../../shared/interfaces/question.interface';
import { AnswerModalComponent } from '../answer-modal/answer-modal.component';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions$: Observable<any>;

  constructor(private questionsService: QuestionsService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.questions$ = this.questionsService.getAllQuestions()
  }

  openAnswerModal(question: Question) {
    const dialogRef = this.dialog.open(AnswerModalComponent, {
      width: '60%',
      height: '60%',
      data: question
    }).afterClosed()
      .pipe(
        filter(answer => !!answer),
        switchMap((answer: string) => this.questionsService.submitAnswer(question.id, answer))
      ).subscribe()
  }

}
