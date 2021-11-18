import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { filter, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { QuestionFormComponent } from '../question-form/question-form.component';
import { AddQuestion } from '../../../../../root-store/admin/questions/actions/questions.actions';

@Component({
  selector: 'app-question-page',
  template: `
    <div class="question_page_wrapper">
      <div class="add_group">
        <div>Add question</div>
        <mat-icon (click)="showCreateModal()">add_circle_outline</mat-icon>
      </div>
      <app-question-list></app-question-list>
    </div>
  `,
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent {

  constructor(private dialog: MatDialog,
              private store: Store<any>) {
  }

  showCreateModal() {
    const dialogRef = this.dialog.open(QuestionFormComponent)
      .afterClosed()
      .pipe(
        filter(data => !!data),
        map((data) => this.store.dispatch(AddQuestion({ question: data }))
        )
      ).subscribe()
  }

}
