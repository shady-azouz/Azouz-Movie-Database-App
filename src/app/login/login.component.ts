import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') signinForm!: NgForm;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  // }

  onSubmit() {
    console.log(this.signinForm.value);
    console.log("Validation: " + this.signinForm.valid);
    if (this.loginService.validateLoginAttempt(this.signinForm.value.email, this.signinForm.value.password))
      console.log('Signed In');
    else
      console.log('Signe In Failed!')
    
  }
}
