import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public dialog:MatDialogRef<ModalComponent>,
      @Inject(MAT_DIALOG_DATA) public message: string
    ) { }

  ngOnInit(): void {
  }

}
