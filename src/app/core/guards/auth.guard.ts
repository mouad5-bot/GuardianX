import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {authUtils} from "../../authUtils";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = authUtils.currentUserValue();
    console.log(currentUser)
    if (currentUser) {
      console.log("done with suc")
      return true;
    }
    console.log("its not done  ;(")
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}



//
//
// import { Injectable } from '@angular/core';
// import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route } from '@angular/router';
// import { Observable } from 'rxjs';
// import {AuthService} from "../../services/auth.service";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate, CanLoad {
//
//   constructor(private authService: AuthService,
//               private router: Router) { }
//
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return this.checkLoggedIn(state.url);
//   }
//
//   canLoad(route: Route): boolean {
//     return this.checkLoggedIn(route.path);
//   }
//
//   checkLoggedIn(url: string): boolean {
//     if (this.authService.isLoggedIn) {
//       return true;
//     }
//     this.authService.redirectUrl = url;
//     this.router.navigate(['/login']);
//     return false;
//   }



