import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsService } from './services/questions.service';


@NgModule({
  declarations: [
    QuestionsComponent,
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [
    QuestionsService
  ]
})
export class QuestionsModule {
}
