import { LoginService } from '../services/login.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs/internal/Observable';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {
                    console.log('Authentication: ' + this.loginService.isAuthenticated());
        if(this.loginService.isAuthenticated() == 'true'){
            return true;
        } else {
            this.router.navigate(['']);
        }
        return false;
    }
}
