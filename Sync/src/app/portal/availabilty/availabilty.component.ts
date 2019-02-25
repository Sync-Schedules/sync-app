import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector : 'app-availabilty',
  templateUrl : './availabilty.component.html',
  styleUrls : ['./availabilty.component.scss']
})
export class AvailabiltyComponent implements OnInit {
  disabled = true;
  user : any;
  date = new Date().getDate();
  dates = [];
  minDate = new Date().getMonth() + 1;
  // maxDate = this.m;
  showDates = [];
  // m = new Date().getMonth();
  availability = [
    this.dates
  ];

  constructor(private as : AuthService, private snackBar : MatSnackBar) {
  }

  ngOnInit() {

    this.as.getProfile().subscribe(profile => {
        this.user = profile.user;
      },
      err => {
        console.log(err);
        return false;
      });

// console.log(this.maxDate)

  }

  enable() {
    this.disabled = false;
    this.dates.length = 0;


  }

  disable() {
    this.disabled = true;
  }

  getAvail(date) {

    // let month = this.date.getMonth() + 1
    this.dates.push(date.getDate());
    // this.showDates.push(month + '/'+ date.getDate() + '/' + date.getFullYear());
    console.log('Date selected: ' + this.date);
    console.log('Dates selected: ' + this.dates);
  }


  saveAvailability(user) {
    console.log('USER TEST: ' + 'user:' + user + ' name:' + user.name + ' avail: ' + user.availability);
    this.user.availability = {
      availability : this.dates
    }
    ;

    console.log(this.user.availability);
    this.disable();

    this.as.updateUser(this.user._id, this.user.availability)
      .subscribe(data => {
        if ( data.success ) {
          this.snackBar.open('availability has been updated!', 'Cool', { duration : 2000 });
          console.log(this.user);
          console.log(this.user.availability)
        } else {
          this.snackBar.open('something went wrong');
        }
      });
    console.log(this.user);
    this.ngOnInit()

  }
}
