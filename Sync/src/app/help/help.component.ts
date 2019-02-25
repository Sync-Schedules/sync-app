import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector : 'app-help',
  templateUrl : './help.component.html',
  styleUrls : ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  user : any;

  constructor(private as : AuthService) {
  }

  ngOnInit() {
    this.as.getProfile().subscribe(profile => {
        this.user = profile.user;
      },
      err => {
        console.log(err);
        return false;
      });
  }

}
