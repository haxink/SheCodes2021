import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserDataService {
    public get currentUser(): User {
        return JSON.parse(window.localStorage.getItem('currentUser'));
    }

    public set currentUser(user: User) {
        window.localStorage.setItem('currentUser', JSON.stringify(user));
    }
}
