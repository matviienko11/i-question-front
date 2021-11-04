import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserStateModule } from '../../root-store/user/user-state.module';


@NgModule({
  declarations: [
    UserComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonToggleModule,
    UserStateModule
  ]
})
export class UserModule {
}
