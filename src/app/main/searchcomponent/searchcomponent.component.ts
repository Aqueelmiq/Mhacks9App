import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataservice.service';
import { Stock } from '../../models/Stock'
import {Router} from "@angular/router";
import {Meme} from "../../models/Meme";


@Component({
  selector: 'app-searchcomponent',
  templateUrl: './searchcomponent.component.html',
  styleUrls: ['./searchcomponent.component.css']
})
export class SearchComponent implements OnInit {

  keyword: string;
  memes: Meme[];

  constructor(public ds: DataService, public router: Router) {
    this.keyword = '';
  }

  ngOnInit() {
  }

  highlight(event) {
    event.target.className += " active";
  }

  dehighlight(event) {
    event.target.className = event.target.className.replace("active", "");
  }

  searchAction() {
    this.memes = this.ds.getMemes(this.keyword);
  }

  selectMeme(meme) {
    this.memes = [];
    this.router.navigate(['/trade', { name: meme.name, img: meme.img_url}]);
  }
}
