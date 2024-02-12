import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {environment} from "../../../core/models/environment";
import {first} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // signupForm: FormGroup;
  // submitted = false;
  // error = '';
  // successmsg = false;
  //
  // constructor(private formBuilder: FormBuilder,
  //             private route: ActivatedRoute,
  //             private router: Router,
  //             private authenticationService: AuthService,
  //             private userService: UserProfileService) { }
  // // set the currenr year
  // year: number = new Date().getFullYear();
  //
  // ngOnInit(): void {
  //   document.body.classList.add('auth-body-bg')
  //
  //   this.signupForm = this.formBuilder.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required],
  //   });
  // }
  //
  // // convenience getter for easy access to form fields
  // get f() { return this.signupForm.controls; }
  //
  // carouselOption: OwlOptions = {
  //   items: 1,
  //   loop: false,
  //   margin: 0,
  //   nav: false,
  //   dots: true,
  //   responsive: {
  //     680: {
  //       items: 1
  //     },
  //   }
  // }
  //
  // /**
  //  * On submit form
  //  */
  // onSubmit() {
  //   this.submitted = true;
  //
  //   // stop here if form is invalid
  //   if (this.signupForm.invalid) {
  //     return;
  //   } else {
  //     if (environment.defaultauth === 'firebase') {
  //       this.authenticationService.register(this.f.email.value, this.f.password.value).subscribe({
  //         next: () => {
  //           this.successmsg = true;
  //           if (this.successmsg) {
  //             this.router.navigate(['/dashboard']);
  //           }
  //         },
  //         error(error) {
  //           this.error = error ? error : '';
  //
  //         },
  //         complete: () => {
  //         }
  //       })
  //     } else {
  //       this.userService.register(this.signupForm.value)
  //         .pipe(first())
  //         .subscribe(
  //           data => {
  //             this.successmsg = true;
  //             if (this.successmsg) {
  //               this.router.navigate(['/account/login']);
  //             }
  //           },
  //           error => {
  //             this.error = error ? error : '';
  //           });
  //     }
  //   }
  // }

}
