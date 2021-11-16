import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-question-table',
  templateUrl: './user-question-table.component.html',
  styleUrls: ['./user-question-table.component.scss']
})
export class UserQuestionTableComponent implements OnInit {

  @Input() questions: any[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.questions);
  }

}
