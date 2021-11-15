import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionPageComponent } from './components/questions/question-page/question-page.component';
import { UserPageResolver } from './resolvers/user-page.resolver';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserPageComponent } from './components/users/user-page/user-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'questions',
        component: QuestionPageComponent
      },
      {
        path: 'users',
        component: UserListComponent,
      },
      {
        path: 'users/:id',
        component: UserPageComponent,
        resolve: { userData: UserPageResolver },
      },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserPageResolver]
})
export class AdminRoutingModule {
}
