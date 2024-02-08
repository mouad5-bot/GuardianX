import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

}
// export interface Tokens {
//   'access-token': string;
//   'refresh-token': string;
// }
//
// export interface TokensR {
//   'accessToken': string;
//   'refreshToken': string;
// }
