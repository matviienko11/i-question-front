import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() navigation: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  redirectToDashboard() {
    this.router.navigate(['user/dashboard'])
  }

  handle({ value }: any) {
    this.navigation.emit(value);
  }
}
