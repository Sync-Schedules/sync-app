import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MailerService {

  constructor(private http : Http) {
  }

  sendEmail(user) {
    let data = { user };
    let body = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.post('http://localhost:3000/mailer/registration',body,{headers:headers})
    return this.http.post('mailer/registration', body, { headers : headers })

  }


  sendSchedule() {


    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('mailer/sendSchedule', { headers : headers })
  }
}
