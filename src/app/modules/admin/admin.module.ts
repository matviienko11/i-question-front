import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminComponent } from './admin.component';
import { AdminStateModule } from '../../root-store/admin/admin-state.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionPageComponent } from './components/questions/question-page/question-page.component';
import { QuestionListComponent } from './components/questions/question-list/question-list.component';
import { QuestionFormComponent } from './components/questions/question-form/question-form.component';
import { UserPageComponent } from './components/users/user-page/user-page.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { QuestionTableComponent } from './components/users/question-table/question-table.component';
import { QuestionModalComponent } from './components/users/question-modal/question-modal.component';
import { UsersService } from './services/users.service';
import { DashboardService } from './services/dashboard.service';
import { QuestionsService } from './services/questions.service';
import { EditModalComponent } from './components/questions/edit-modal/edit-modal.component';
import { MatSortModule } from '@angular/material/sort';
import { SearchComponent } from './components/questions/search/search.component';


@NgModule({
  declarations: [
    SidebarComponent,
    AdminComponent,
    DashboardComponent,
    QuestionPageComponent,
    QuestionListComponent,
    QuestionFormComponent,
    UserPageComponent,
    UserListComponent,
    QuestionTableComponent,
    QuestionModalComponent,
    EditModalComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonToggleModule,
    MatTabsModule,
    AdminStateModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatSortModule,
    FormsModule
  ],
  providers: [
    DashboardService,
    QuestionsService,
    UsersService
  ]
})
export class AdminModule {
}
