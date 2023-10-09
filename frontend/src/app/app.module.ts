import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogintypeComponent } from './logintype/logintype.component';
import { SignuptypeComponent } from './signuptype/signuptype.component';
import { MainnewsComponent } from './mainnews/mainnews.component';
import {HttpClientModule} from '@angular/common/http'
import { NgToastModule } from 'ng-angular-popup';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LogintypeComponent,
    SignuptypeComponent,
    MainnewsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [CookieService,AppComponent,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
