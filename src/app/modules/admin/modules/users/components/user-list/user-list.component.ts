import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { GetAllUsers } from '../../../../../../root-store/admin/users/actions/users.actions';
import { SelectAllUsers } from '../../../../../../root-store/admin/users/state/users.selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<any> = this.store.pipe(SelectAllUsers);
  displayedColumns = ['first_name', 'last_name', 'phone', 'email'];

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
    this.store.dispatch(GetAllUsers())
  }
}
