import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";
import {VenueService} from "../../services/venue.service";
import {MatDialog, MatSnackBar} from "@angular/material";
import {current} from "codelyzer/util/syntaxKind";

@Component({
  selector: 'app-create-shift',
  templateUrl: './create-shift.component.html',
  styleUrls: ['./create-shift.component.scss'],
  providers:[VenueService]
})
export class CreateShiftComponent implements OnInit {

  constructor(private us: UserService, private as: AuthService, private vs: VenueService, private snack:MatSnackBar, private dialog: MatDialog) { }

  dj: any;
  venue: any;
  date: any;
  time:any;
  open: boolean = false;
  djs= [];
  venues= [];
  dates=[];
  shift: any;
  times= ['9:00' ,'10:00'];
  minDate = new Date();
  errorMsg: boolean = false;
  disable: boolean = false;

  ngOnInit() {

    this.us.getDJ().subscribe(data =>{
      this.dj = data;

      for(let i = 0; i<this.dj.length; i++)
      {

        this.djs.push(this.dj[i]);
      }
      console.log(this.dates)
    });
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

    this.us.getShifts().subscribe(data => {
      this.shift = data;


    });
  }


  selectDJ(){
    this.open = true;
    for(let i = 0; i<this.dj.availability.length;i++){
          this.dates.push(this.dj.availability[i]);
      console.log(this.dates);
      }

    this.dj.availability.forEach(function (value) {
      console.log("V   " + value);

    });

  }




  submitShift(){

    let d = this.date.getDate();

    function isBelow31(currentValue){
      return currentValue !== d;
    }


    console.log('every: ' + this.dj.availability.every(isBelow31));
    console.log('yes');
    console.log(this.date);

    this.shift = {
      venue: this.venue,
      date: this.date,
      time: this.time,
      dj: this.dj.username,
    } ;



      if (this.dj.availability.every(isBelow31) !== true)
      {
        this.errorMsg = true;
        this.snack.open("DJ is not available" , '',{duration: 2000})
      }
      else{


        this.as.addShift(this.shift)
          .subscribe(data => {
            if (data.success){
              this.snack.open('shift has been added!' , 'Cool', {duration: 2000});
              this.dialog.closeAll();
              this.ngOnInit();
            }
            else{
              this.snack.open('something went wrong', 'Oh no', {duration: 1000});
            }
          })

      }

    // this.dialog.closeAll();
  }

  // myFilter = (d: Date): boolean => {
  //   console.log(this.dj);
  //   for(let i = 0; i<31;i++){
  //     this.dates.push(this.dj.availability[i]);
  //   }
  //   const day = d.getDate();
  //   console.log(this.dates);
  //   return day !== 4 && day !==3
  //
  //
  // }


}
