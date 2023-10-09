import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//app component
export class AppComponent {
  title = 'newsnation';
  private readonly apiKey = environment.API_KEY;
  constructor(private http: HttpClient) { }

  getDataFromLink(fav: string): Observable<any> {
    const link = `https://newsapi.org/v2/top-headlines?country=in&category=${fav}&apiKey=${this.apiKey}`;
    const response = this.http.get(link);
    return response;
  }

  getDataFromLinkUsingQuery(fav: string): Observable<any> {
    const link = `https://newsapi.org/v2/everything?q=${fav}&apiKey=${this.apiKey}`;
    const response = this.http.get(link);
    return response;
  }

  saveSignupDetail(customerObj: { email: string, password: string, firstName: string, lastName: string, phone: number, tokens: [{ token: string }] }): Observable<any> {
    const link = environment.HALF_ROUTE + '/user-signup';
    return this.http.post(link, customerObj);
  }

  verifyUserAtMain(token: string): Observable<any> {
    const link = environment.HALF_ROUTE + '/verify-user';
    const response = this.http.post(link, { token });
    return response;
  }

  verifyUserAtLogin(userObj: { email: string, password: string }): Observable<any> {
    const link = environment.HALF_ROUTE + '/user-login';
    const response = this.http.post(link, userObj);
    return response;
  }

}