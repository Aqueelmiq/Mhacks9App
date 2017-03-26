import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-tradeview',
  templateUrl: './tradeview.component.html',
  styleUrls: ['./tradeview.component.css']
})
export class TradeviewComponent implements OnInit {

  name = '';
  login = false;
  memeImg = "http://i.imgur.com/PsziB.jpg"
  constructor(public routing: ActivatedRoute, public af: AngularFire) { }

  ngOnInit() {

    this.af.auth.subscribe(auth => {
      if(auth) this.login = true;
    });

    this.routing.params.subscribe(params => {
      this.memeImg = params['img'];
      this.name = params['name'];
    });
  }

}
