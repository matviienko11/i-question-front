import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminComponent } from './admin.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    SidebarComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonToggleModule,
    MatTabsModule
  ]
})
export class AdminModule { }
