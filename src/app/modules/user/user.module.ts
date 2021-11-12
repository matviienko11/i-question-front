import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserStateModule } from '../../root-store/user/user-state.module';
import { MyProfileComponent } from './components/my-profile/my-profile.component';


@NgModule({
  declarations: [
    UserComponent,
    NavbarComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonToggleModule,
    MatIconModule,
    MatDialogModule,
    UserStateModule,
  ]
})
export class UserModule {
}
