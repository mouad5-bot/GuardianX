import {JwtAuthenticationResponse} from "./core/models/jwt-auth-response";
import {User} from "./core/models/User";
import {Login} from "./core/models/login";

class AuthUtils {


  constructor() {
  }


  /**
   * Logout the user
   */
  logout() {
    localStorage.removeItem('authUser');
    localStorage.clear();
  }

  setLoggedCredentials(user: User, jwtAuthenticationResponse: JwtAuthenticationResponse) {
    if (user)
      localStorage.setItem('authUser', JSON.stringify(user));
    if (jwtAuthenticationResponse) {
      this.setAccessToken(jwtAuthenticationResponse.accessToken);
      this.setRefreshToken(jwtAuthenticationResponse.refreshToken);
    }
  }

  setRefreshToken(refreshToken: string) {
    localStorage.setItem('refresh_token', refreshToken);
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem('access_token', accessToken);
  }

  /**
   * Returns the authenticated user
   */
  getAuthenticatedUser(): Login | null {
    const authUserString = localStorage.getItem('authUser');
    console.log(authUserString)
    if (!authUserString) {
      return null;
    }
    return JSON.parse(authUserString) as User;
  }

  currentAccessToken() {
    return localStorage.getItem('access_token') ?? null;
  }

  currentUserValue() {
    return this.getAuthenticatedUser();
  }
}

export const authUtils = new AuthUtils();
