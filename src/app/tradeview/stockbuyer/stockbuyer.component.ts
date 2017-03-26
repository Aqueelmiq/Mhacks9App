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
  uid: string;
  stocks;

  constructor(public af: AngularFire) {

    this.toggleText = "Buy Stock"
    this.buying = true;
    this.quantity = 0;
    this.currentPrice = 4.3;
    this.mathh = "$ " + Math.round(this.quantity*this.currentPrice*100)/100;
    this.af.auth.subscribe(auth => {
      this.uid = auth.uid;
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
    let stamp = this.name + "@" + today.getTime();
    x[stamp] = {quantity: this.quantity, date: today.getTime(), pur_price: this.currentPrice, name: this.name};
    this.stocks = this.af.database.object('/user/' + this.uid + "/stocks/" + stamp);

    this.stocks.update(x[stamp]);
  }

  stock_sell(){
    this.buying = false;
    this.toggleText = "Sell Stock"
  }
}
