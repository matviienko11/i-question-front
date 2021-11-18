import { Component, OnInit } from '@angular/core';
import { GetAllQuestions } from '../../../../root-store/user/all-questions/actions/all-questions.actions';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;

  constructor(private store: Store<any>,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.route.parent?.snapshot.data.user;
    this.store.dispatch(GetAllQuestions({ userId: this.user.id }));
  }

}
