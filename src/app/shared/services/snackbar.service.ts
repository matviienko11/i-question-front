import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable()
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {
  }

  openSnackbar(message: string, action: string) {
    return this.snackbar.open(message, action, {
      horizontalPosition: 'end',
      verticalPosition: 'top'
    })
  }
}
