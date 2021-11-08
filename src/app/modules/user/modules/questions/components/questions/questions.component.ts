import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  question$: Observable<any>;
  answer: string = '';

  constructor(private questionsService: QuestionsService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  startGame() {
    this.question$ = this.questionsService.getQuestion()
  }

  submitAnswer(questionId: string) {
    this.questionsService.submitAnswer(questionId, this.answer).subscribe()
    this.answer = '';
    this.question$ = this.questionsService.getQuestion()
  }

}
