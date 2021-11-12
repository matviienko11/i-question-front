import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminComponent } from './admin.component';
import { AdminStateModule } from '../../root-store/admin/admin-state.module';


@NgModule({
  declarations: [
    SidebarComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonToggleModule,
    MatTabsModule,
    AdminStateModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class AdminModule {
}
