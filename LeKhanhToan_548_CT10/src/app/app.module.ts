import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './Admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestModule } from './Guest/guest.module';
import {AngularFireAuthModule} from '@angular/fire/compat/auth'
import { AngularFireStorageModule} from '@angular/fire/compat/storage'
import { AngularFirestoreModule} from '@angular/fire/compat/firestore'
import {AngularFireDatabaseModule} from '@angular/fire/compat/database'
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GuestModule,
    AdminModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
