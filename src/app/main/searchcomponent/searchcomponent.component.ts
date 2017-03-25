import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataservice.service';
import { Stock } from '../../models/Stock'

@Component({
  selector: 'app-searchcomponent',
  templateUrl: './searchcomponent.component.html',
  styleUrls: ['./searchcomponent.component.css']
})
export class SearchComponent implements OnInit {

  keyword: string;
  memes: Stock[]; //Observable<any[]>;
  constructor(public ds: DataService) {
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

  searchAction(){
    console.log(this.keyword);
    this.memes = this.ds.getMemes(this.keyword);
  }

  selectMeme(meme) {

  }
}
