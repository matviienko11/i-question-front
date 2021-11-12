import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { UserResolver } from './resolvers/user.resolver';

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
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'questions',
        loadChildren: () => import('./modules/questions/questions.module').then(m => m.QuestionsModule)
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
