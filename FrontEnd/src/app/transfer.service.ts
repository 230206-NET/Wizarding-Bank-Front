import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  apiRoot: string = 'http://localhost:5092/';
  //apiRoot: string = 'https://wiz-back.azurewebsites.net/';

  constructor(private http: HttpClient) {}
  //When sending money to self, recipient = id, sender = null
  //TODO: wrap functions to accept name email etc
  //Card-to-wallet
  cardToWallet(cardId : number, userId : number, amount : number) : Observable<any>{
    var body : Transaction = {
      "cardId": cardId,
      "recipientId": userId,
      "amount": amount
    };
    return this.http.post(this.apiRoot + 'Transaction/transactions/internal?type=3', body) as Observable<any>; 
  }
  
  //wallet-to-card
  walletToCard(userId : number, cardId : number, amount : number) : Observable<any> {
    var body : Transaction = {
      "senderId": userId,
      "cardId": cardId,
      "amount": amount,
    };
    return this.http.post(this.apiRoot + 'Transaction/transactions/internal?type=2', body) as Observable<any>; 
  }

  //bankAccount-to-wallet
  accountToWallet(accountId : number, userId : number, amount : number) : Observable<any> {
    var body : Transaction = {
      "accountId": accountId,
      "recipientId": userId,
      "amount": amount
    };
    return this.http.post(this.apiRoot + 'Transaction/transactions/internal?type=4', body) as Observable<any>; 
  }

  //wallet-to-bankAccount
  walletToAccount(userId : number, accountId : number, amount : number) : Observable<any> {
    var body : Transaction = {
      "accountId": accountId,
      "senderId": userId,
      "amount": amount
    };
    return this.http.post(this.apiRoot + 'Transaction/transactions/internal?type=1', body) as Observable<any>; 
  }
  
  requestMoney(userId : number, amount : number, recipientId : number, description : string) : Observable<any> {
    var body : Transaction = {
      "amount": amount,
      "description": "Request" + description,
      "recipientId": userId,
      "status": "pending",
      "senderId": recipientId
    };
    return this.http.post(this.apiRoot + "/Transaction/transaction", body) as Observable<any>;
  }
}
