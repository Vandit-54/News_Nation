import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService, private http: HttpClient, private user: AppComponent) { }

  isLoggedIn():Promise<boolean>
   {
    const token = this.cookieService.get('accessToken');
    return new Promise((resolve,reject) => {

      this.user.verifyUserAtMain(token).subscribe(item => {
        if (item.status)
        {
          console.log(item.status);
          resolve(true);
        }
        else
          resolve(false);
      });

    })

  }
}
