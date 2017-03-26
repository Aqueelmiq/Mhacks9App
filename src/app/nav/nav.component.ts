import {Component, Input, OnInit} from '@angular/core';
import {AngularFire} from "angularfire2";
import { Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() login:boolean;
  btn1 = "Login";
  btn2 = "Sign Up";

  constructor(public af: AngularFire, public router: Router) {

  }

  ngOnInit() {
    if(this.login) {
      this.btn2 = "Sign Out";
    }
  }

  logout() {
    this.af.auth.logout().then( () => {
      this.router.navigate(['/home']);
    });
  }

}
