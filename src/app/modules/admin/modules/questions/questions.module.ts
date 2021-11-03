import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionsRoutingModule } from './questions-routing.module';

@NgModule({
  declarations: [
    QuestionListComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule
  ]
})
export class QuestionsModule { }
