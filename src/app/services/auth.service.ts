import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../core/models/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl + "/api/v1/auth";

  constructor(private http: HttpClient) { }
}
