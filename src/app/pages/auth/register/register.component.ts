import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  form: FormGroup;
  submitted = false;
  error = '';
  successmsg = false;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthService,
  ){
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    //document.body.classList.add('auth-body-bg')
  }

  // convenience getter for easy access to form fields
  // get f() { return this.form.controls; }

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


  register() {
    this.submitted = true;
    const val = this.form.value;
console.log(val.firstName);
    if (this.form.invalid) {
      return;
    } else {
      this.authenticationService.register(val.firstName, val.lastName, val.email, val.password).subscribe({
        next: () => {
          this.successmsg = true;
          if (this.successmsg) {
            this.router.navigate(['/dashboard']);
          }
        },
        error: (error) => {
          this.error = error ? error : '';

        },
        complete: () => {
        }
      })
    }
  }

}
