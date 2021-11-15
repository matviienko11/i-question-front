import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {

  question$: Observable<any>;
  answer: string = '';
  userId: string;
  error: string

  constructor(private questionsService: QuestionsService,
              private route: ActivatedRoute) {
    this.userId = this.route.parent?.snapshot.data.user.id;
  }

  startGame() {
    this.Question$;
  }

  submitAnswer(questionId: string) {
    this.questionsService.submitAnswer(this.userId, questionId, this.answer).subscribe()
    this.answer = '';
    this.Question$;
  }

  skipQuestion() {
    this.answer = '';
    this.Question$;
  }

  private get Question$() {
    return this.question$ = this.questionsService.getQuestion(this.userId)
      .pipe(
      map((data) => {
          if (data.error) this.error = data.error.message
          return data.question
        }
      ));
  }

}
