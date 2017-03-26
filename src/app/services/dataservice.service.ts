import { Injectable } from '@angular/core';
import {Stock} from "../models/Stock";
import {Http} from "@angular/http";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toPromise';
import {Meme} from "../models/Meme";
import {AngularFire} from "angularfire2";

@Injectable()
export class DataService {

  api_key = "d55e22330f85142";
  base = "http://api.grepwords.com/lookup?apikey=";

  memes: Meme[] = [];

  constructor(public http: Http, public af: AngularFire) {
    this.af.database.list('/memes').subscribe(memes => {
      memes.forEach( data => {
        this.memes.push(new Meme( data["name"].slice(1,data["name"].length-2), data["img_url"], parseInt(data["year_high"]), parseInt(data["year_low"]), parseInt(data["current_price"])));
      })
    })
  }

  getMemes(keyword: string): Meme[] {
    return this.memes.filter((val) => {
      if (val.name.toLowerCase().includes(keyword.toLowerCase()))
        return true;
    });
  }

  /**
  loadMemes() {
    this.data.forEach((val) => {
      let x = this.uri + encodeURIComponent(val.trim());
      this.http.get(x, {})
        .map((res) => {
          return res.json();
        }).subscribe((data) => {
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
          this.memes.push(stock);
        });
    });
  }

  loadMeme(meme): Observable<any> {

  }
**/

  loadData(name) {
    let x = this.base + this.api_key +"&q=" + encodeURIComponent(name.trim());
    return this.http.get(x)
      .map((res) => {
        return res.json()[0];
      })
  }


  getDefaultMeme() {
    return new Meme("A", "a", 1, 2, 3);
  }
}
