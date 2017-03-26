import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import auth = firebase.auth;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  url: string;
  constructor(public routing: ActivatedRoute, public af: AngularFire) {
    this.af.auth.subscribe((auth) => {
      console.log(auth["uid"]);
      this.url = "/user/" + auth["uid"];
      this.items = this.af.database.list(this.url);
      this.items.subscribe(item => console.log(item));
    });
  }

  ngOnInit() {
    this.routing.params.subscribe(params => {
      console.log("getting called");
    });

  }

}
