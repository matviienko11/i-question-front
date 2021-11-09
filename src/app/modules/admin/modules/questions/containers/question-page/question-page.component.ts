import { Component } from '@angular/core';

@Component({
  selector: 'app-question-page',
  template: `
    <app-question-form></app-question-form>
    <app-question-list></app-question-list>`,
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent {

  constructor() {
  }

}
