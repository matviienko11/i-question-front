import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsService } from './services/questions.service';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { QuestionPageComponent } from './containers/question-page/question-page.component';


@NgModule({
  declarations: [
    QuestionListComponent,
    QuestionFormComponent,
    QuestionPageComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,

  ],
  providers: [
    QuestionsService,
    FormBuilder
  ]
})
export class QuestionsModule {
}
