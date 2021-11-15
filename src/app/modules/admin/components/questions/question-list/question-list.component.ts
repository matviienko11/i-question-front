import { Component, OnInit, ViewChild } from '@angular/core';

import { filter, map, switchMap, tap } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';

import { QuestionsService } from '../../../services/questions.service';
import { Question } from '../../../../../shared/interfaces/question.interface';
import { DeleteQuestion, GetAllQuestions } from '../../../../../root-store/admin/questions/actions/questions.actions';
import { SelectAllQuestions, SelectCount } from '../../../../../root-store/admin/questions/state/questions.selectors';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmModalComponent } from '../../../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  questions: MatTableDataSource<Question[]>;
  page: number = 1;
  pageSize: number = 5;
  totalItems: number;
  pageSizeOptions = [5, 10, 20];
  displayedColumns = ['question', 'category', 'createdAt', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private questionsService: QuestionsService,
              private store: Store<any>,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.Questions$.subscribe()
  }

  handlePaginationChange({ pageIndex, pageSize }: any) {
    this.page = pageIndex + 1;
    this.pageSize = pageSize;
    this.Questions$;
  }

  handleEdit() {

  }

  handleDelete(id: string) {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: 'delete'
    }).afterClosed()
      .pipe(
        filter(event => !!event),
        map(() => this.store.dispatch(DeleteQuestion({ id })))
      ).subscribe()
  }

  private get Questions$() {
    this.store.dispatch(GetAllQuestions({ limit: this.pageSize, page: this.page }))
    return this.store.pipe(
      SelectAllQuestions,
      switchMap((questions: any) => {
        return this.store.pipe(
          SelectCount,
          map((count: any) => {
            this.totalItems = count;
            this.questions = new MatTableDataSource<any>(questions);
          })
        )
      }))
  }

}
