import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule, ORIGIN } from '@angular/fire/functions';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@sc/core';
import { SharedModule } from '@sc/shared';
import { GoogleChartsModule } from 'angular-google-charts';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule, // Keep import here otherwise guard service fails as it users afAuth service
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    SharedModule,
    CoreModule,
    GoogleChartsModule.forRoot(),
    AppRoutingModule, // must be after all other route modules as import order matters
  ],
  providers: !environment.production
    ? [
      { provide: ORIGIN, useValue: 'http://localhost:5001' }
    ]
    : [],
  bootstrap: [AppComponent]
})
export class AppModule { }
