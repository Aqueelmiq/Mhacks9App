import {Component, Input, OnInit} from '@angular/core';
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-stockbuyer',
  templateUrl: './stockbuyer.component.html',
  styleUrls: ['./stockbuyer.component.css']
})
export class StockbuyerComponent implements OnInit {

  @Input() name:string;
  quantity: number;
  currentPrice: number;
  mathh: string;
  buying: boolean;
  toggleText: string;

  stocks;

  constructor(public af: AngularFire) {

    this.toggleText = "Buy Stock"
    this.buying = true;
    this.quantity = 0;
    this.currentPrice = 4.3;
    this.mathh = "$ " + Math.round(this.quantity*this.currentPrice*100)/100;
    this.af.auth.subscribe(auth => {
      this.stocks = this.af.database.object('/user/' + auth.uid + "/stocks");
    })
  }

  ngOnInit() {
  }

  calculatePrice(){
    this.mathh = "$ " + Math.round(this.quantity*this.currentPrice*100)/100;
  }

  stock_buy(){
    this.buying = true;
    this.toggleText = "Buy Stock"
    var x = {};
    let today = new Date();
    let stamp = this.name + today.getTime();
    x[stamp] = {name: this.name, qty: this.quantity, date: today.getTime(), price: this.currentPrice}
  }

  stock_sell(){
    this.buying = false;
    this.toggleText = "Sell Stock"
  }
}
