import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signuptype',
  templateUrl: './signuptype.component.html',
  styleUrls: ['./signuptype.component.css']
})
export class SignuptypeComponent implements OnInit {
  //main branch
  companyLine: string = ''
  constructor(private toast: NgToastService, private user: AppComponent, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    setInterval(this.trialFunction, 2000);
  }

  trialFunction() {
    let topics = ['Sports', 'Entertainment', 'Science', 'Technology', 'General', 'Health'];
    this.companyLine = `${topics[Math.floor(Math.random() * 6)]}`;
  }

  //Saving data to database sign-up data
  async saveMyData(userInfoObj: any) {
    for (let key in userInfoObj) {
      if (userInfoObj[key] == '') return this.toast.error({ detail: "Error-Message", summary: "Fill the details!!", duration: 5000 });

      if (userInfoObj.password.length < 8) return this.toast.error({ detail: "Error-Message", summary: "Password length should be atleast 8 character!!", duration: 5000 });

      if (userInfoObj.password !== userInfoObj.cPassword) return this.toast.error({ detail: "Error-Message", summary: "Password not match!!", duration: 5000 });
    }

    this.user.saveSignupDetail(userInfoObj).subscribe((item) => {
      const myDate = new Date;
      myDate.setHours(myDate.getHours() + 1);
      this.cookieService.set("accessToken", item.tokens[0].token, { expires: myDate });
      this.toast.info({ detail: "Congrats!!!", summary: 'Successfully Registered', duration: 5000 });
      this.router.navigate(['/main']);
    }, (error) => {
      this.toast.error({ detail: "WAITTT!!!", summary: error.error, duration: 5000 });
    })
  }

}
