import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('fLogin') signinForm!: NgForm;
  @ViewChild('fSignUp') signupForm!: NgForm;
  signIn = false;
  signUp = false;
  popupMessage = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  // }

  onSignIn() {
    this.signIn = true;
  }

  onCancelSignIn() {
    this.signIn = false;
  }

  onSignUp() {
    this.signUp = true;
    this.popupMessage = false;
  }

  onCancelSignUp() {
    this.signUp = false;
  }

  onSubmitLogin() {
    console.log(this.signinForm.value);
    console.log("Validation: " + this.signinForm.valid);
    if (this.loginService.validateLoginAttempt(this.signinForm.value.email, this.signinForm.value.password))
      console.log('Signed In');
    else
      console.log('Signe In Failed!')
    
  }

  onSubmitSignUp() {
    if(this.loginService.validateSignUp(this.signupForm.value.email)) {
      this.loginService.signUp(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password);
      this.signUp = false;
      this.signIn = true;
    } else {
      this.popupMessage = true;
    }
  }
}
