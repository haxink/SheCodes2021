import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '@sc/core';

@Injectable()
export class AuthService {
    constructor(
        private readonly userDataService: UserDataService,
        private readonly router: Router,
    ) { }

    public async login(email: string, password: string) {
        console.log(`Successfully logged in with email ${email}`);
        this.userDataService.currentUser = { email };
        await this.router.navigateByUrl('/');
    }

    public async logOut() {
        console.log('Successfully logged out');
        this.userDataService.currentUser = null;
        await this.router.navigateByUrl('/');
    }
}
