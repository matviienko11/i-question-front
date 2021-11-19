import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  template: `
    <div>
      <mat-form-field class="example-full-width" appearance="outline">
        <mat-label>Search</mat-label>
        <input matInput [formControl]="searchControl">
      </mat-form-field>
    </div>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchControl = new FormControl();
  @Output() search: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      map((data: any) => this.search.emit(data))
    ).subscribe()
  }
}
