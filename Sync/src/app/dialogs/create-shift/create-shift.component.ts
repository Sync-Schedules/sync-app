import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";
import {VenueService} from "../../services/venue.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-create-shift',
  templateUrl: './create-shift.component.html',
  styleUrls: ['./create-shift.component.scss'],
  providers:[VenueService]
})
export class CreateShiftComponent implements OnInit {

  constructor(private us: UserService, private as: AuthService, private vs: VenueService, private snack:MatSnackBar) { }

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
      console.log(this.dates)

    }
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
