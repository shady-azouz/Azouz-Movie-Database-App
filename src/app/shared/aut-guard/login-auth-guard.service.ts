import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthGuard {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('Authentication: ' + this.loginService.isAuthenticated());
    if (this.loginService.isAuthenticated() == 'false') {
      return true;
    } else {
      this.router.navigate(['/movies']);
    }
    return false;
  }
}
