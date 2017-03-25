import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import { RouterModule } from '@angular/router';

import { DataService } from './services/dataservice/dataservice.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SearchcomponentComponent } from './searchcomponent/searchcomponent.component';

export const firebase = {
  apiKey: 'AIzaSyB9YrpgoobvwiSG7QvdudEsK7X4PZuuyk4',
  authDomain: 'mhacks9aja.firebaseapp.com',
  databaseURL: 'https://mhacks9aja.firebaseio.com',
  storageBucket: 'mhacks9aja.appspot.com',
  messagingSenderId: '779546774729'
};
// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'home', component: MainComponent }
];

const authConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SearchcomponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(firebase, authConfig),
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
