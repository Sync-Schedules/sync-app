import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";
import { Shift} from "../../models/shift.model";
import {MAT_DIALOG_DATA, MatDialog, MatSnackBar, MatTableDataSource} from "@angular/material";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {VenueService} from "../../services/venue.service";
import {FormControl} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';

@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.scss'],
  providers: [
    VenueService,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class AddShiftComponent implements OnInit {

  shift: any;
  venue: any;
  time: String;
  date: Date;
  dj: any;



  constructor(private us: UserService,
              public dialog: MatDialog,
              private as: AuthService,
              private vs: VenueService,
              private snackBar: MatSnackBar,
              private router: Router,
              @Inject(MAT_DIALOG_DATA)public data: any) { }


  djs = [];
  venues = [];

  times = ['12:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00'];




  ngOnInit() {

    this.vs.getVenue().subscribe(data =>{
      this.venue = data;
      for (let i = 0; i < this.venue.length; i++ ) {
        this.venues.push(this.venue[i].name);
        console.log(this.venue[i].name);
        }
      } ,
      err =>{
        console.log(err);
        return false;
      });

    this.us.getDJ().subscribe(data =>{
      this.dj = data;

      for(let i = 0; i<this.dj.length; i++){
        this.djs.push(this.dj[i].username);
        // console.log(this.dj[i].username);
      }
    })


    if(this.djs[i].availability !== this.shift[i].date){
      console.log(this.djs[i].availability);
      console.log(this.shift[i].date);
    }

  }

  close(){
    this.dialog.closeAll();
  }


  getDayName(dateStr, locale)  {
    let date = new Date(dateStr);
    let day = this.getDayName(dateStr, "us-EN");
    console.log(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });
  }





}
