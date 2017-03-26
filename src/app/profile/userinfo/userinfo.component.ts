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

  userName:string;
  balance:string;
  marketCap: string;
  opening: string;
  memeHigh: string;
  memeLow: string;
  profileImg: string;
  itom:Object;

  constructor(public routing:ActivatedRoute,  public af: AngularFire) {
    this.userName = "Pepe the frog";
    this.balance = "$5";
    this.marketCap = "50 mil";
    this.opening = "$4";
    this.memeHigh = "10";
    this.memeLow = "28";
    this.profileImg = "http://emojipedia-us.s3.amazonaws.com/cache/29/27/29278aa57ced9c9b3861d8f4960e4748.png";
/*
    this.af.auth.subscribe((auth) => {
      this.url = "user/" + auth["uid"];
      console.log(this.url);
      this.items = this.af.database.object(this.url);
      this.items.subscribe( item => {
        this.itom = item;
        console.log(item);
      }

      );
    });
    */
  }

  ngOnInit() {

    this.af.auth.subscribe((auth) => {
      this.url = "user/" + auth["uid"];
      console.log(this.url);
      this.items = this.af.database.object(this.url);
      this.items.subscribe( item => {
          this.itom = item;
          console.log(item);
          this.userName = this.itom["name"];
          console.log(this.itom["name"]);
          this.balance = this.itom["balance"];
        console.log(this.itom["balance"]);
          this.profileImg = this.itom["img"];
        }
      );
    });
    console.log
  }


}
