import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsService } from './services/questions.service';


@NgModule({
  declarations: [
    QuestionListComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    QuestionsService
  ]
})
export class QuestionsModule {
}
