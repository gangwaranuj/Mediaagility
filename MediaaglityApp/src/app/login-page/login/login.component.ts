import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { Constants } from 'src/app/model/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: boolean = false;
  loginForm: FormGroup;
  submitted: boolean | false;
  loading: boolean | false;
  user: User = new User;

  constructor(
    private auth: AuthenticationServiceService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initialization();
  }

  initialization = () => {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  get f() { return this.loginForm.controls }

  onSubmit = () => {
    if (this.loginForm.invalid) {
      return false;
    }

    this.user.name = this.f.name.value;
    this.user.password = this.f.password.value;
    this.auth.validateUser(this.user).subscribe(
      data => {
        sessionStorage.setItem(Constants.AUTHENTICATE, data)
        if (data) {
          this.router.navigate(['/user-list']);
        } else {
          this.submitted = false;
          this.error = true;
        }
      },
      error => {
        console.log(` getting error to authenticate user ${error}`);
      }
    )

  }
}
