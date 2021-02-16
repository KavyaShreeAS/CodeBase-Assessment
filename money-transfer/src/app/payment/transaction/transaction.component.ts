import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactionList;
  searchText; 
  constructor(
    private dataService: GetDataService
  ) { }

  ngOnInit(): void {
    this.transactionList = this.dataService.fetchData();
  }


  sortData(property) {
    this.transactionList = this.transactionList.sort((a, b) => {
      if (property === 'valueDate') {
        if (a.dates.valueDate > b.dates.valueDate) {
          return 1;
        } else {
          return -1;
        }
      }

      if (property === 'name') {
        if (a.merchant.name.toLowerCase() > b.merchant.name.toLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      }

      if (property === 'amount') {
        if (parseInt(a.transaction.amountCurrency.amount) > parseInt(b.transaction.amountCurrency.amount)){
          return 1;
        } else {
          return -1;
        }
      }
    });
  }
}
