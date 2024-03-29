import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../core/models/environment";
import {map, Observable} from "rxjs";
import {JwtAuthenticationResponse} from "../core/models/jwt-auth-response";
import {User} from "../core/models/User";
import {authUtils} from "../authUtils";
import {Login} from "../core/models/login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = false;
  redirectUrl: string | undefined;
  private apiUrl: string = environment.apiUrl + "/api/v1/auth";

  constructor(private http: HttpClient) { }

  register(firstName: string,lastName: string,email: string, password: string): Observable<JwtAuthenticationResponse> {
    return this.http.post<JwtAuthenticationResponse>(this.apiUrl + "/register", {firstName ,lastName ,email, password});
  }

  login(email: string, password: string): Observable<JwtAuthenticationResponse> {
    return this.http.post<JwtAuthenticationResponse>(this.apiUrl + "/login", {email, password})
      .pipe(
        map((response: JwtAuthenticationResponse) => {

          // login successful if there's a jwt token in the response
            if (response.accessToken && response.refreshToken) {

              console.log("this is the user in service" );
              // retrieve the user info
              this.me(response.accessToken).subscribe({
                next: (user: User) => {
                  authUtils.setLoggedCredentials(user, response);
                }
              });
            }
            this.isLoggedIn = true;
            return response;
        }
    ));
  }

  me(access_token: string): Observable<User> {
    return this.http.get<User>(this.apiUrl + "/me", {headers: {Authorization: `Bearer ${access_token}`}})
  }

  logout() {
    this.isLoggedIn = false;
    authUtils.logout();
  }
}
