import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserStateModule } from '../../root-store/user/user-state.module';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    UserComponent,
    NavbarComponent,
    MyProfileComponent,
    QuestionsComponent,
    DashboardComponent
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
  ]
})
export class UserModule {
}
