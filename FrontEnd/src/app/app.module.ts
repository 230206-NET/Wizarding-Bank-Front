import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { LandingComponent } from './Landing/Landing.component';
import { AuthModule } from '@auth0/auth0-angular';
import { BusinessHomeComponent } from './business-home/business-home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDataService } from './user-data.service';
import { AddPaymentFormComponent } from './add-payment-form/add-payment-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewAllTransactionsComponent } from './view-all-transactions/view-all-transactions.component';
import { HttpClientModule } from '@angular/common/http';
import { LoanApplyComponent } from './loan-apply/loan-apply.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransferPageComponent } from './transfer-page/transfer-page.component';
import { WalletPageComponent } from './wallet-page/wallet-page.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    LandingComponent,
    BusinessHomeComponent,
    NavbarComponent,
    AddPaymentFormComponent,
    ViewAllTransactionsComponent,
    LoanApplyComponent,
    TransferPageComponent,
    WalletPageComponent,
    TransferMoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-z8ypmdswd2nbh4n2.us.auth0.com',
      clientId: 'Zq0rCWWoR0q3QHWpfAcT2wizKAqtTDYJ',
      authorizationParams: {
        redirect_uri: 'http://localhost:4200'
      }
    })
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
