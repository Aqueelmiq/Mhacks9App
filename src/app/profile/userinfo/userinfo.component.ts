import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FirebaseListObservable, AngularFire, FirebaseObjectObservable} from "angularfire2";

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  items: FirebaseObjectObservable<any[]>;
  url: string;

  memeName:String;
  currentPrice:String;
  marketCap: String;
  opening: String;
  memeHigh: String;
  memeLow: String;
  profileImg: String;

  constructor(public routing:ActivatedRoute,  public af: AngularFire) {
    this.memeName = "Pepe the frog";
    this.currentPrice = "$5";
    this.marketCap = "50 mil";
    this.opening = "$4";
    this.memeHigh = "10";
    this.memeLow = "28";
    this.profileImg = "http://emojipedia-us.s3.amazonaws.com/cache/29/27/29278aa57ced9c9b3861d8f4960e4748.png";

    this.af.auth.subscribe((auth) => {
      this.url = "user/" + auth["uid"];
      console.log(this.url);
      this.items = this.af.database.object(this.url);
      this.items.subscribe( item => {
          console.log(JSON.stringify(item));
          this.memeName = item["2"].$value,
            this.currentPrice = item["0"].$value,
            this.profileImg = item["1"].$value
      }

      );
    });
  }

  ngOnInit() {
  }

}
