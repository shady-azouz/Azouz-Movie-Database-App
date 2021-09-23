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
    console.log("localStorage name onInit: "+localStorage.getItem('name'));
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  // }

  onSignIn() {
    this.signIn = true;
  }

  onCancelSignIn() {
    this.signIn = false;
    this.signinForm.reset();
  }

  onSignUp() {
    this.signUp = true;
    this.popupMessage = false;
  }

  onCancelSignUp() {
    this.signUp = false;
    this.signIn = false;
    this.signupForm.reset();
  }

  onSubmitLogin() {
    if (this.loginService.validateLoginAttempt(this.signinForm.value.email, this.signinForm.value.password)) {
      this.router.navigate(['/movies']);
      for(let account of this.loginService.accounts) {
        if(account.email == this.signinForm.value.email){
          localStorage.setItem('name', account.name);
          console.log('localStorage name after Init: '+localStorage.getItem('name'));
          break;
        }
      }
    }
    else
      console.log('Signe In Failed!')
    this.signinForm.reset();
  }

  onSubmitSignUp() {
    if(this.loginService.validateSignUp(this.signupForm.value.email)) {
      this.loginService.signUp(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password);
      this.signUp = false;
      this.signIn = true;
    } else {
      this.popupMessage = true;
    }
    this.signupForm.reset();
  }
}
