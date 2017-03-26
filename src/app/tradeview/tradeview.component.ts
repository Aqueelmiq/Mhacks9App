import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularFire} from "angularfire2";
import {DataService} from "../services/dataservice.service";
import {Stock} from "../models/Stock";

@Component({
  selector: 'app-tradeview',
  templateUrl: './tradeview.component.html',
  styleUrls: ['./tradeview.component.css']
})
export class TradeviewComponent implements OnInit {

  stock: Stock = new Stock('bob', 'bob.jpg');
  name = '';
  login = false;
  memeImg = "http://i.imgur.com/PsziB.jpg"
  constructor(public routing: ActivatedRoute, public af: AngularFire, public ds: DataService) { }

  ngOnInit() {

    this.af.auth.subscribe(auth => {
      if(auth) this.login = true;
    });

    this.routing.params.subscribe(params => {
      this.memeImg = params['img'];
      this.name = params['name'];
      this.ds.loadMeme(this.name).subscribe((data) => {
        var stock = new Stock(data['name'], data["img_url"]);
        stock.cap = data['total'];
        stock.current_percentage = data['current_percentage'];
        stock.peak_price = data["peak_price"];
        stock.peak_month = data["peak_month"];
        stock.peak_year = data["peak_year"];
        stock.peak_month = data["peak_month"];
        stock.current_price = data["current_price"];
        stock.year_high = data["year_high"];
        stock.year_low = data["year_low"];
        this.stock = stock;
        alert(stock);
      });
    });
  }

}
