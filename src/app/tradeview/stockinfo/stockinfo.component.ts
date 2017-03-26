import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Stock} from "../../models/Stock";
import {Meme} from "../../models/Meme";
import {DataService} from "../../services/dataservice.service";

@Component({
  selector: 'app-stockinfo',
  templateUrl: './stockinfo.component.html',
  styleUrls: ['./stockinfo.component.css']
})
export class StockinfoComponent implements OnInit {

  @Input() stock: Meme = this.ds.getDefaultMeme();
  memeName:string;
  currentPrice:string;
  marketCap: string;
  opening: string;
  memeHigh: string;
  memeLow:string;

  constructor(public routing:ActivatedRoute, public ds: DataService) {
    this.routing.params.subscribe(params => {
      this.memeName = params['name'];
      this.stock = this.ds.getMemes(this.memeName)[0];
      this.currentPrice = "$" + this.stock.current_value;
      this.marketCap = this.stock.year_high*1.4 + " mil";
      this.opening = "$" + this.stock.current_value;
      this.memeHigh = this.stock.year_high + "";
      this.memeLow = this.stock.year_low + "";
    });
  }

  ngOnInit() {
  }

}
