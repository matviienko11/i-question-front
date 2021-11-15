import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allQuestions$: Observable<any>;
  allUsers$: Observable<any>;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.allQuestions$ = this.dashboardService.getAllQuestions();
    this.allUsers$ = this.dashboardService.getAllUsers()
  }

}
