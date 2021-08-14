import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { UserDataService } from '../core';

@Injectable()
export class CompaniesService {
    constructor(
        private readonly fns: AngularFireFunctions,
        private readonly userDataService: UserDataService,
    ) { }

    public async helloWorld(): Promise<string> {
        return await this.fns.httpsCallable('helloWorld')({ data: this.userDataService.currentUser }).toPromise();
    }
}
