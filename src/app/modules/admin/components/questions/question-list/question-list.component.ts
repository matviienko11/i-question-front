import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { map } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';

import { QuestionsService } from '../../../services/questions.service';
import { Question } from '../../../../../shared/interfaces/question.interface';
import { GetAllQuestions } from '../../../../../root-store/admin/questions/actions/questions.actions';
import { SelectAllQuestions } from '../../../../../root-store/admin/questions/state/questions.selectors';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit, AfterViewInit {

  questions: MatTableDataSource<Question[]>;
  page: number = 1;
  pageSize: number = 5;
  totalItems: number;
  pageSizeOptions = [5, 10, 20];
  displayedColumns = ['question', 'category', 'createdAt'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private questionsService: QuestionsService,
              private store: Store<any>) {
  }

  ngOnInit(): void {
    this.Questions$.subscribe()
  }

  ngAfterViewInit() {
    if (this.questions) {
      this.questions.paginator = this.paginator;
    }
  }

  handlePaginationChange({ pageIndex, pageSize }: any) {
    this.page = pageIndex + 1;
    this.pageSize = pageSize;
    this.Questions$.subscribe()
  }

  private get Questions$() {
    this.store.dispatch(GetAllQuestions({ limit: this.pageSize, page: this.page }))
    return this.store.pipe(
      SelectAllQuestions,
      map(({ count, data }: any) => {
        this.totalItems = count;
        this.questions = new MatTableDataSource<any>(data);
      })
      )
  }

}
