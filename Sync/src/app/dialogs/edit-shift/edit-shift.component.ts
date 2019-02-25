import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar } from "@angular/material";

@Component({
  selector : 'app-edit-shift',
  templateUrl : './edit-shift.component.html',
  styleUrls : ['./edit-shift.component.scss']
})
export class EditShiftComponent implements OnInit {

  venue : any[];
  date : Date;
  time : string;
  _id : string;

  constructor(private as : AuthService,
              private snackBar : MatSnackBar,
              public dialog : MatDialog,
              public dialogRef : MatDialogRef<EditShiftComponent>,
              @Inject(MAT_DIALOG_DATA) public data : any) {
  }

  ngOnInit() {
    this.as.getShifts().subscribe(shift => {
        this.venue = shift.venue;
      },
      err => {
        console.log(err);
        return false;
      });
  }

}
