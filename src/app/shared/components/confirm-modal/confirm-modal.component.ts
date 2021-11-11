import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-modal',
  template: `
    <div class="confirm_modal">
      <p>Are you sure you want to {{action}}?</p>
      <div class="confirm_modal__button">
        <button mat-raised-button (click)="close()">Confirm</button>
      </div>
    </div>
  `,
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  action: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
              public dialogRef: MatDialogRef<ConfirmModalComponent>) {
  }

  ngOnInit(): void {
    this.action = this.data
  }

  close() {
    this.dialogRef.close(this.action)
  }

}
