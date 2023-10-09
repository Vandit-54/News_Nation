import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LogintypeComponent } from './logintype/logintype.component';
import { MainnewsComponent } from './mainnews/mainnews.component';
import { SignuptypeComponent } from './signuptype/signuptype.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignuptypeComponent},
  {path:'main',component:MainnewsComponent,canActivate:[AuthGuard]},
  {path:'login',component:LogintypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
