import { Component, OnInit } from '@angular/core';

@Component({
  selector : 'app-confirm-dialog',
  templateUrl : './confirm-dialog.component.html',
  styleUrls : ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  user : Object;
  _id : String;
  role : String;
  email : String;
  show : boolean = false;
  users : Object[];
  errorMessage : any;

  constructor() {
  }

  ngOnInit() {

  }

}

