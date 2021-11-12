import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { filter, map, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { AuthService } from '../../../auth/services/auth.service';
import { ConfirmModalComponent } from '../../../../shared/components/confirm-modal/confirm-modal.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() navigationURL: EventEmitter<any> = new EventEmitter<any>();

  constructor(private authService: AuthService,
              public dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  handleRedirect({ value }: any) {
    this.navigationURL.emit(value)
  }

  handleLogout() {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: 'logout'
    }).afterClosed()
      .pipe(
        filter(event => !!event),
        tap(() => this.router.navigate(['auth'])),
        map(() => this.authService.logout())
      )
      .subscribe()
  }
}
