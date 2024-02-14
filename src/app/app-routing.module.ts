import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/auth/login/login.component";
import {RegisterComponent} from "./pages/auth/register/register.component";
import {ContentComponent} from "./components/content/content.component";
import {PageNotFoundComponentComponent} from "./components/page-not-found-component/page-not-found-component.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuard} from "./core/guards/auth.guard";
const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path: "home",
    canActivate: [AuthGuard],
    children: [
      {path:"", component: HomeComponent},
      {path:"content", component: ContentComponent},
      {path:"dashboard", component: DashboardComponent},
    ]
  },
  {path:"dashboard", component: DashboardComponent},
  {path:"",redirectTo:"/home" ,pathMatch:"full"},
  {path:"**", component: PageNotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
