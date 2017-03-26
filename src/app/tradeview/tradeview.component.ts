import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularFire} from "angularfire2";
import {DataService} from "../services/dataservice.service";
import {Stock} from "../models/Stock";
import {Meme} from "../models/Meme";

@Component({
  selector: 'app-tradeview',
  templateUrl: './tradeview.component.html',
  styleUrls: ['./tradeview.component.css']
})
export class TradeviewComponent implements OnInit {

  stock: Meme = this.ds.getDefaultMeme();
  name = '';
  login = false;
  memeImg = "http://i.imgur.com/PsziB.jpg";

  constructor(public routing: ActivatedRoute, public af: AngularFire, public ds: DataService) {

    this.routing.params.subscribe(params => {
      this.memeImg = params['img'];
      this.name = params['name'];
      this.stock = this.ds.getMemes(this.name)[0];
    });

  }

  ngOnInit() {

    this.af.auth.subscribe(auth => {
      if(auth) this.login = true;
    });

    this.stock = this.ds.getMemes(this.name)[0];
    console.log(this.stock);

  }

}
