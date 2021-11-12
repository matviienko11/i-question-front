import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute) {
    this.user = this.route.parent?.snapshot.data.user;
  }

  ngOnInit(): void {
  }

}
