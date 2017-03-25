import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;
  login: Boolean;
  btnText: String;
  toggleText: String;

  constructor(public af: AngularFire, private router: Router) {
    this.email = '';
    this.password = '';
    this.login = true;
    this.btnText = 'Login';
    this.toggleText = "Don't have an account? Sign up";
    this.af.auth.subscribe((auth) => {
      console.log(auth);
      if(auth) {
        router.navigate(['/home']);
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
    this.af.auth.login({
      email: '' + this.email,
      password: '' + this.password,
    });
  }

  onSignup() {
    if(this.password.length < 6) {
      alert('Password should have at least 6 characters!');
    }
    this.af.auth.createUser({
      email: '' + this.email,
      password: '' + this.password,
    });
  }

}
