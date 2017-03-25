import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tradeview',
  templateUrl: './tradeview.component.html',
  styleUrls: ['./tradeview.component.css']
})
export class TradeviewComponent implements OnInit {

  memeImg = "http://i.imgur.com/PsziB.jpg"
  constructor(public routing: ActivatedRoute) { }

  ngOnInit() {
    this.routing.params.subscribe(params => {
      this.memeImg = params['img'];
    });
  }

}
