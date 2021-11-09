import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './services/dashboard.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
