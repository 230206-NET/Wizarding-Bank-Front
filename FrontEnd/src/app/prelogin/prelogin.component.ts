import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Auth0Client } from '@auth0/auth0-spa-js';

@Component({
  selector: 'app-prelogin',
  templateUrl: './prelogin.component.html',
  styleUrls: ['./prelogin.component.css']
})
export class PreloginComponent {
  redirect_uri: string = 'http://localhost:4200/'
  personalAuth0: Auth0Client = new Auth0Client({
    domain: 'dev-z8ypmdswd2nbh4n2.us.auth0.com',
    clientId: 'Zq0rCWWoR0q3QHWpfAcT2wizKAqtTDYJ',
    authorizationParams: {
      redirect_uri: this.redirect_uri + 'UserHome'
    }
  })
  businessAuth0: Auth0Client = new Auth0Client({
    domain: 'dev-z8ypmdswd2nbh4n2.us.auth0.com',
    clientId: '3723m9sPuC9l6thbtyOLBQpfdzjQuxrS',
    authorizationParams: {
      redirect_uri: this.redirect_uri + 'BusinessHome'
    }
  })
  constructor() { }
  login() {
    this.personalAuth0.loginWithRedirect();
  }
  businessLogin() {
    this.businessAuth0.loginWithRedirect();
  }
}
