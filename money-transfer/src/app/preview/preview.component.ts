import { Component, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  transferDetail: any;
  balance: number;
  updatedBalance: number;

  constructor(
    private dataService: GetDataService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.transferDetail = this.dataService.getPaymentDetail();
  }

  transfer() {
    this.dataService.transferAmount(this.transferDetail);
    this.dataService.getBalance().subscribe(val => {
      this.balance = val;
    });
    this.updatedBalance = this.balance - this.transferDetail.amount;
    this.dataService.setBalance(this.updatedBalance);
    this.route.navigate(['']);
  }
}
