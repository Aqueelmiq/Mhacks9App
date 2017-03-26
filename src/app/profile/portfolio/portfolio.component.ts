import { Component, OnInit } from '@angular/core';
import {Stock} from "../../models/Stock";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolio: any[];

  constructor() {
    this.portfolio= [{name: "Poop", current_price: 33.2, qty: 45,}];
  }

  ngOnInit() {
  }

}
