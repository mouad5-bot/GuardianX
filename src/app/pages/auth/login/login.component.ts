import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.form = this.fb.group({
      email: ['mouad@gmail.com', [Validators.required, Validators.email]],
      password: ['pswd123', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // document.body.classList.add('auth-body-bg')
    this.form = this.fb.group({
      email: ['khalid@gmail.com', [Validators.required, Validators.email]],
      password: ['password', [Validators.required]],
    });
  }

  login() {
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password)
        .subscribe(
          () => {
            console.log("User is logged in");
            this.router.navigateByUrl('/');
          }
        );
    }
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
