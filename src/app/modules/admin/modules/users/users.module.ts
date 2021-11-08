import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { UserListComponent } from './components/user-list/user-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserPageComponent } from './components/user-page/user-page.component';
import { QuestionTableComponent } from './components/question-table/question-table.component';
import { QuestionModalComponent } from './components/question-modal/question-modal.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    UserListComponent,
    UserPageComponent,
    QuestionTableComponent,
    QuestionModalComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class UsersModule { }
