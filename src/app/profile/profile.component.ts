import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  memeName:String;
  currentPrice:String;
  marketCap: String;
  opening: String;
  memeHigh: String;
  memeLow: String;
  profileImg: String;

  constructor(public routing:ActivatedRoute) {
    this.memeName = "Pepe the frog";
    this.currentPrice = "$5";
    this.marketCap = "50 mil";
    this.opening = "$4";
    this.memeHigh = "10";
    this.memeLow = "28";
    this.profileImg = "http://emojipedia-us.s3.amazonaws.com/cache/29/27/29278aa57ced9c9b3861d8f4960e4748.png";
  }

  ngOnInit() {
  }

}
