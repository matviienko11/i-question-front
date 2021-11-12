import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { filter, map, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { AuthService } from '../../../auth/services/auth.service';
import { ConfirmModalComponent } from '../../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() navigation: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router,
              private authService: AuthService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  redirectToDashboard() {
    this.router.navigate(['user/dashboard']);
  }

  handleRedirect({ value }: any) {
    this.navigation.emit(value);
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
