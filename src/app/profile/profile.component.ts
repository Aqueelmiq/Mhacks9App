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

  }

  ngOnInit() {
    this.routing.params.subscribe(params => {
      console.log("getting called");
    });

  }

}
