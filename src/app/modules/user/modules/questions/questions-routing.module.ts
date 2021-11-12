import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionsComponent } from './components/questions/questions.component';
import { UserResolver } from '../../resolvers/user.resolver';

const routes: Routes = [
  {
    path: '',
    component: QuestionsComponent,
    resolve: { userId: UserResolver }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserResolver]
})
export class QuestionsRoutingModule {
}
