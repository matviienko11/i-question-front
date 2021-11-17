import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserStateModule } from '../../root-store/user/user-state.module';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserQuestionTableComponent } from './components/user-question-table/user-question-table.component';
import { QuestionEvaluateModalComponent } from './components/question-evaluate-modal/question-evaluate-modal.component';



@NgModule({
  declarations: [
    UserComponent,
    NavbarComponent,
    MyProfileComponent,
    QuestionsComponent,
    DashboardComponent,
    UserQuestionTableComponent,
    QuestionEvaluateModalComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonToggleModule,
    MatIconModule,
    MatDialogModule,
    UserStateModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatListModule,
  ]
})
export class UserModule {
}
