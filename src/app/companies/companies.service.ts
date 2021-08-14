import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable()
export class CompaniesService {
    constructor(
        private readonly fns: AngularFireFunctions,
        private readonly db: AngularFirestore,
    ) { }

    public async list() {
        const query = await this.db.collection('companies').get().toPromise();
        return query.docs.map(doc => ({ uid: doc.id, ...(doc.data() as any) }));
    }

    public async get(uid: string) {
        const doc = await this.db.collection('companies').doc(uid).get().toPromise();
        return doc?.data();
    }

    public async review(content: string) {
        return await this.fns.httpsCallable('reviewCompany')({
            data: content,
        }).toPromise();
    }
}
