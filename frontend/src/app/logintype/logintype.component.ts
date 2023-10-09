import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-logintype',
  templateUrl: './logintype.component.html',
  styleUrls: ['./logintype.component.css']
})
export class LogintypeComponent implements OnInit {

  constructor(private cookie:CookieService,private router:Router,private http:HttpClient,private user:AppComponent) { }

  ngOnInit(): void {
    if(this.cookie.check('accessToken'))
      this.router.navigate(['/main'])
  }

  verifyTheUser(customerObj:{email:string,password:string})
  {
    this.user.verifyUserAtLogin(customerObj).subscribe(item => {
      if(item.tokens)
      {
        const myDate = new Date;
        myDate.setHours(myDate.getHours() + 1);
        this.cookie.set('accessToken',item.tokens[0].token,{expires:myDate});
        this.router.navigate(['/main']);
      }
      else
      {
        this.router.navigate(['/signup']);
      }
    });
  }

}
