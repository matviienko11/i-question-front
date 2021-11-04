import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { GetAllQuestions } from '../../../../../../root-store/user/actions/user.actions';
import { SelectAllQuestions } from '../../../../../../root-store/user/state/user.selectors';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions$: Observable<any> = this.store.pipe(SelectAllQuestions)

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
    this.store.dispatch(GetAllQuestions())
  }

}
