import {Component, OnInit, Input} from '@angular/core';
import {Stock} from "../../models/Stock";
import {AngularFire, FirebaseObjectObservable} from "angularfire2";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  url: string;
  portfolio: any[];
  items: FirebaseObjectObservable<any[]>;
  actual:Object;
  keys: any[];
  current_price: number = 5;
  total_value: string;
  net_revenue:string;

  constructor(public af: AngularFire) {
    this.current_price = 5;
    this.total_value = "$50";
    this.net_revenue = "500";
  }

  ngOnInit() {
    this.af.auth.subscribe((auth) => {
      this.url = "user/" + auth["uid"] + "/stocks/";
      //console.log(this.url);
      this.items = this.af.database.object(this.url);
      this.items.subscribe( item => {
          //console.log(item);
          this.actual = item;
        this.keys = Object.keys(item);
        }
      );
    });

  }

}
