import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService {
    constructor(private router: Router, private auth: AuthService) {}

    canActivate() {
        if (this.auth.getAutenthicated()) {
            return true;
        } else {
            this.router.navigateByUrl('/sessions/login');
            return false;
        }
    }
}