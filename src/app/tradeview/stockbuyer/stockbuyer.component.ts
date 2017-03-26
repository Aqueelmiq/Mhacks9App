import {Component, Input, OnInit} from '@angular/core';
import {AngularFire} from "angularfire2";
import {Stock} from "../../models/Stock";
import {Meme} from "../../models/Meme";
import {DataService} from "../../services/dataservice.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-stockbuyer',
  templateUrl: './stockbuyer.component.html',
  styleUrls: ['./stockbuyer.component.css']
})
export class StockbuyerComponent implements OnInit {

  @Input() stock: Meme = this.ds.getDefaultMeme();
  name:string;
  quantity: number;
  currentPrice: number;
  total_price: string;
  buying: boolean;
  toggleText: string;
  uid: string;
  stocks;
  balance: number;
  new_bal:number;
  stock_dic: Object;


  constructor(public af: AngularFire, public ds: DataService, public routing: ActivatedRoute) {

    this.routing.params.subscribe(params => {
      this.name = params['name'];
      this.stock = this.ds.getMemes(this.name)[0];
      this.currentPrice = this.stock.current_value;
    });

    this.toggleText = "Buy Stock"
    this.buying = true;
    this.quantity = 0;

    this.total_price = "$ " + Math.round(this.quantity*this.currentPrice*100)/100;
    this.af.auth.subscribe(auth => {
      this.uid = auth.uid;
      this.stocks = this.af.database.object('/user/' + auth.uid);
      this.stocks.subscribe(item => {
        this.balance = item["balance"];
        this.stock_dic = item["stocks"];
        })
    })
  }

  ngOnInit() {

  }

  calculatePrice(){
    this.total_price = "$ " + Math.round(this.quantity*this.currentPrice*100)/100;
  }

  toggle() {
    if(this.buying) this.stock_buy();
    else this.stock_sell();
  }

  stock_buy(){
    this.toggleText = "Buy Stock"
    var x = {};
    let today = new Date();
    let stamp = this.name + "@" + today.getTime();
    x[stamp] = {quantity: 0-this.quantity, date: today.getTime(), pur_price: this.currentPrice, name: this.name};
    this.stocks = this.af.database.object('/user/' + this.uid + "/stocks/" + stamp);
    this.new_bal = this.balance + this.quantity*this.currentPrice;
    if(this.quantity != 0){
      this.stocks.update(x[stamp]);
    }
    this.stocks = this.af.database.object('/user/' + this.uid );
    var y = {};
    y["balance"] = this.new_bal
    if(this.quantity != 0){
      this.stocks.update(y);
    }
    if(this.new_bal <0){
      alert("You cannot make that transaction. Not enough money");
    }
  }

  stock_sell(){
    this.toggleText = "Sell Stock"
    this.toggleText = "Buy Stock"
    var x = {};
    let today = new Date();
    let stamp = this.name + "@" + today.getTime();
    x[stamp] = {quantity: this.quantity, date: today.getTime(), pur_price: this.currentPrice, name: this.name};
    this.stocks = this.af.database.object('/user/' + this.uid + "/stocks/" + stamp);
    this.new_bal = this.balance - this.quantity*this.currentPrice;
    if(this.quantity != 0){
      this.stocks.update(x[stamp]);
    }
    this.stocks = this.af.database.object('/user/' + this.uid );
    var y = {};
    y["balance"] = this.new_bal
    if(this.quantity != 0){
      this.stocks.update(y);
    }
    if(this.new_bal <0){
      alert("You cannot make that transaction. Not enough money");
    }

  }

}
