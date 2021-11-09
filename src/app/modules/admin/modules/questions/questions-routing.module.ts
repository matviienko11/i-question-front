import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionPageComponent } from './containers/question-page/question-page.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionPageComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule {}
