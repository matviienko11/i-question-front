import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { UserResolver } from './resolvers/user.resolver';
import { QuestionsComponent } from './components/questions/questions.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    resolve: { user: UserResolver },
    children: [
      {
        path: 'my-profile',
        component: MyProfileComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'questions',
        component: QuestionsComponent,
      },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserResolver]
})
export class UserRoutingModule {

}
