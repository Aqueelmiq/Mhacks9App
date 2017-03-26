import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Router} from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  email: String;
  password: String;
  login: Boolean;
  btnText: String;
  toggleText: String;
  poopypie: String = "lol";

  constructor(public af: AngularFire, private router: Router) {
    this.email = '';
    this.password = '';
    this.login = true;
    this.btnText = "Login";
    this.toggleText = "Don't have an account? Sign up";
    this.af.auth.subscribe((auth) => {
      console.log(auth);
      if(auth) {
        router.navigate(['/profile']);
      }
    });
  }

  ngOnInit() {
  }

  onToggle() {
    if(this.login) {
      this.login = false;
      this.btnText = 'Sign Up';
      this.toggleText = "Already Registered? Log in";
    }
    else {
      this.login = true;
      this.btnText = 'Login';
      this.toggleText = "Don't have an account? Sign up";
    }
  }

  onAuthenticate() {
    if(this.login) {
      this.onLogin();
    }
    else {
      this.onSignup();
    }
  }

  onLogin() {
    console.log(this.email);
    this.af.auth.login({
      email: '' + this.email,
      password: '' + this.password,
    });
    this.router.navigate(['/profile', ]);
  }

  onSignup() {
    if(this.password.length < 6) {
      alert('Password should have at least 6 characters!');
    }
    this.af.auth.createUser({
      email: '' + this.email,
      password: '' + this.password,
    });
    this.router.navigate(['/profile', ]);
  }

}
