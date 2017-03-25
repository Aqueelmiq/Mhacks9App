import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stockbuyer',
  templateUrl: './stockbuyer.component.html',
  styleUrls: ['./stockbuyer.component.css']
})
export class StockbuyerComponent implements OnInit {
  quantity: number;
  currentPrice: number;
  mathh: string;
  buying: boolean;
  toggleText: string;
  constructor() {
    this.toggleText = "Buy Stock"
    this.buying = true;
    this.quantity = 0;
    this.currentPrice = 4.3;
    this.mathh = "$ " + Math.round(this.quantity*this.currentPrice*100)/100;
  }

  ngOnInit() {
  }

  calculatePrice(){
    this.mathh = "$ " + Math.round(this.quantity*this.currentPrice*100)/100;
  }

  stock_buy(){
    this.buying = true;
    this.toggleText = "Buy Stock"
  }

  stock_sell(){
    this.buying = false;
    this.toggleText = "Sell Stock"
  }
}
