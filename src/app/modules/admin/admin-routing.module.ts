import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'questions',
        loadChildren: () => import('./modules/questions/questions.module').then(m => m.QuestionsModule)
      },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
