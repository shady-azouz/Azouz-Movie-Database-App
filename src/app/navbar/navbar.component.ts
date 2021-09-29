import { MoviesService } from './../movies.service';
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

  constructor(private router: Router, private loginService: LoginService, private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  onGoHome() {
    this.moviesService.setCurrentPage(1);
    if(this.router.url === '/details')
      this.router.navigate(['/movies']);
    else if(this.router.url === '/movies'){
        this.router.navigate(['/movies']);
        window.location.reload();
      }
  }

  onLogOut() {
    this.router.navigate(['']);
    this.loginService.signOut();
  }

}
