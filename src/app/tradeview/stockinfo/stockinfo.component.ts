import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stockinfo',
  templateUrl: './stockinfo.component.html',
  styleUrls: ['./stockinfo.component.css']
})
export class StockinfoComponent implements OnInit {
  memeName:String;
  currentPrice:String;
  marketCap: String;
  opening: String;
  memeHigh: String;
  memeLow: String;

  constructor() {
    this.memeName = "Pepe the frog";
    this.currentPrice = "$5";
    this.marketCap = "50 mil";
    this.opening = "$4";
    this.memeHigh = "10";
    this.memeLow = "28";
  }

  ngOnInit() {
  }

}
