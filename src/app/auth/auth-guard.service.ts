import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserDataService } from '@sc/core';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    constructor(
        private readonly userDataService: UserDataService,
        private readonly router: Router,
    ) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        if (!!this.userDataService.currentUser) {
            return true;
        } else {
            return this.router.parseUrl('/auth/login');
        }
    }

    public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        return this.canActivate(route, state);
    }
}
