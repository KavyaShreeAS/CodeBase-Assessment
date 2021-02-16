import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TransferComponent } from './payment/transfer/transfer.component';
import { TransactionComponent } from './payment/transaction/transaction.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PreviewComponent } from './preview/preview.component';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path : 'preview',
    component : PreviewComponent,
    canActivate : [AuthGuard]
  },
  {
    path : '',
    component :  PaymentComponent
  },
  {
    path : '',
    redirectTo : '/',
    pathMatch : 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TransferComponent,
    TransactionComponent,
    FilterPipe,
    PreviewComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
