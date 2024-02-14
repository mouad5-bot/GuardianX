import {Component, OnInit, signal} from '@angular/core';
import {authUtils} from "../../authUtils";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ariaLabel: string = 'Toggle navigation';
  isAuthenticated: boolean = false;
  constructor(private router : Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.isAuthenticated = this.authService.isLoggedIn;
  }

  logout() {
    authUtils.logout();
    this.router.navigate(['/login']);
  };
}
