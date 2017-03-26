import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Stock} from "../../models/Stock";

@Component({
  selector: 'app-stockinfo',
  templateUrl: './stockinfo.component.html',
  styleUrls: ['./stockinfo.component.css']
})
export class StockinfoComponent implements OnInit {

  @Input() stock: Stock;
  memeName:String;
  currentPrice:String;
  marketCap: String;
  opening: String;
  memeHigh: String;
  memeLow: String;

  constructor(public routing:ActivatedRoute) {
    //this.memeName = this.stock.name;
    /**
    this.currentPrice = "$" + this.stock.current_price;
    this.marketCap = this.stock.cap + " mil";
    this.opening = "$" + this.stock.current_price; ;
    this.memeHigh = this.stock.year_high + "";
    this.memeLow = this.stock.year_low + ""; **/
  }

  ngOnInit() {
     this.routing.params.subscribe(params => {
       this.memeName = params['name'];
     });
  }

}
