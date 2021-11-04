import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsService } from './services/questions.service';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [
    QuestionsService
  ]
})
export class QuestionsModule { }
