import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  public email: any;
  constructor() { }
  public getUser(): string {
    if (this.email) {

      console.log("This function has been called")
    }

    return this.email;
  }
  public addUser(user: string) {
    this.email = user;
    console.log("Added user!! " + user);
  }
}
