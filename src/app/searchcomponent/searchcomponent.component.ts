import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchcomponent',
  templateUrl: './searchcomponent.component.html',
  styleUrls: ['./searchcomponent.component.css']
})
export class SearchcomponentComponent implements OnInit {

  keyword: String;
  constructor(
  ) {
    this.keyword = '';
  }

  ngOnInit() {
  }

  searchAction(){
    console.log(this.keyword)
  }
}
