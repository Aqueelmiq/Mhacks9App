import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { DataService } from './services/dataservice.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './main/searchcomponent/searchcomponent.component';
import { TradeviewComponent } from './tradeview/tradeview.component';
import { NavComponent } from './nav/nav.component';
import { GraphComponent } from './tradeview/graph/graph.component';
import { StockinfoComponent } from './tradeview/stockinfo/stockinfo.component';
import { StockbuyerComponent } from './tradeview/stockbuyer/stockbuyer.component';
import { ProfileComponent } from './profile/profile.component';
import { UserinfoComponent } from './profile/userinfo/userinfo.component';
import { PortfolioComponent } from './profile/portfolio/portfolio.component';
import { AnalysisComponent } from './profile/analysis/analysis.component';

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
  { path: 'home', component: MainComponent },
  { path: 'trade', component: TradeviewComponent},
  { path: 'profile', component: ProfileComponent}
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
    SearchComponent,
    TradeviewComponent,
    NavComponent,
    GraphComponent,
    StockinfoComponent,
    StockbuyerComponent,
    ProfileComponent,
    UserinfoComponent,
    PortfolioComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(firebase, authConfig),
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
