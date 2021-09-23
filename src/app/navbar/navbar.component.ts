import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username = localStorage.getItem('name');

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onGoHome() {
    this.router.navigate(['/movies']);
  }

  onLogOut() {
    this.router.navigate(['']);
    this.loginService.signOut();
  }

}
