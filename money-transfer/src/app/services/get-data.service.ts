import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  paymentDetail: object;
  balance$ = new BehaviorSubject<number>(5000);
  redirect: boolean;
  constructor(
  ) { }

  transactionList = {
    'data': [
      {
        'categoryCode': '#12a580',
        'imgPath': '../../assets/icons/7-eleven.png',
        'dates': {
          'valueDate': 1600493600000
        },
        'transaction': {
          'amountCurrency': {
            'amount': 5000,
            'currencyCode': 'EUR'
          },
          'type': 'Salaries',
          'creditDebitIndicator': 'CRDT'
        },
        'merchant': {
          'name': 'Backbase',
          'accountNumber': 'SI64397745065188826'
        }
      }, {
        'categoryCode': '#12a580',
        'imgPath': '../../assets/icons/7-eleven.png',
        'dates': {
          'valueDate': 1600387200000
        },
        'transaction': {
          'amountCurrency': {
            'amount': '82.02',
            'currencyCode': 'EUR'
          },
          'type': 'Card Payment',
          'creditDebitIndicator': 'DBIT'
        },
        'merchant': {
          'name': 'The Tea Lounge',
          'accountNumber': 'SI64397745065188826'
        }
      }, {
        'categoryCode': '#d51271',
        'imgPath': '../../assets/icons/7-eleven.png',
        'dates': {
          'valueDate': '2020-09-19'
        },
        'transaction': {
          'amountCurrency': {
            'amount': '84.64',
            'currencyCode': 'EUR'
          },
          'type': 'Card Payment',
          'creditDebitIndicator': 'DBIT'
        },
        'merchant': {
          'name': 'Texaco',
          'accountNumber': 'SI64397745065188826'
        }
      }, {
        'categoryCode': '#12a580',
        'imgPath': '../../assets/icons/7-eleven.png',
        'dates': {
          'valueDate': 1600300800000
        },
        'transaction': {
          'amountCurrency': {
            'amount': '84.76',
            'currencyCode': 'EUR'
          },
          'type': 'Card Payment',
          'creditDebitIndicator': 'DBIT'
        },
        'merchant': {
          'name': 'The Tea Lounge',
          'accountNumber': 'SI64397745065188826'
        }
      }, {
        'categoryCode': '#c12020',
        'imgPath': '../../assets/icons/7-eleven.png',
        'dates': {
          'valueDate': 1600370800000
        },
        'transaction': {
          'amountCurrency': {
            'amount': '22.10',
            'currencyCode': 'EUR'
          },
          'type': 'Online Transfer',
          'creditDebitIndicator': 'DBIT'
        },
        'merchant': {
          'name': 'Amazon Online Store',
          'accountNumber': 'SI64397745065188826'
        }
      }, {
        'categoryCode': '#c89616',
        'imgPath': '../../assets/icons/7-eleven.png',
        'dates': {
          'valueDate': 1600214400000
        },
        'transaction': {
          'amountCurrency': {
            'amount': '46.25',
            'currencyCode': 'EUR'
          },
          'type': 'Card Payment',
          'creditDebitIndicator': 'DBIT'
        },
        'merchant': {
          'name': '7-Eleven',
          'accountNumber': 'SI64397745065188826'
        }
      }, {
        'categoryCode': '#e25a2c',
        'imgPath': '../../assets/icons/7-eleven.png',
        'dates': {
          'valueDate': 1476721442000
        },
        'transaction': {
          'amountCurrency': {
            'amount': '19.72',
            'currencyCode': 'EUR'
          },
          'type': 'Online Transfer'
        },
        'merchant': {
          'name': 'H&M Online Store',
          'accountNumber': 'SI64397745065188826'
        }
      }, {
        'categoryCode': '#1180aa',
        'imgPath': '../../assets/icons/7-eleven.png',
        'dates': {
          'valueDate': '2020-09-15'
        },
        'transaction': {
          'amountCurrency': {
            'amount': '68.87',
            'currencyCode': 'EUR'
          },
          'type': 'Transaction',
          'creditDebitIndicator': 'DBIT'
        },
        'merchant': {
          'name': 'Jerry Hildreth',
          'accountNumber': 'SI64397745065188826'
        }
      }, {
        'categoryCode': '#1180aa',
        'imgPath': '../../assets/icons/7-eleven.png',
        'dates': {
          'valueDate': 1600041600000
        },
        'transaction': {
          'amountCurrency': {
            'amount': '52.36',
            'currencyCode': 'EUR'
          },
          'type': 'Transaction',
          'creditDebitIndicator': 'DBIT'
        },
        'merchant': {
          'name': 'Lawrence Pearson',
          'accountNumber': 'SI64397745065188826'
        }
      }, {
        'categoryCode': '#12a580',
        'imgPath': '../../assets/icons/7-eleven.png',
        'dates': {
          'valueDate': 1599955200000
        },
        'transaction': {
          'amountCurrency': {
            'amount': '75.93',
            'currencyCode': 'EUR'
          },
          'type': 'Card Payment',
          'creditDebitIndicator': 'DBIT'
        },
        'merchant': {
          'name': 'Whole Foods',
          'accountNumber': 'SI64397745065188826'
        }
      }, {
        'categoryCode': '#fbbb1b',
        'imgPath': '../../assets/icons/7-eleven.png',
        'dates': {
          'valueDate': 1599868800000
        },
        'transaction': {
          'amountCurrency': {
            'amount': '142.95',
            'currencyCode': 'EUR'
          },
          'type': 'Online Transfer',
          'creditDebitIndicator': 'DBIT'
        },
        'merchant': {
          'name': 'Southern Electric Company',
          'accountNumber': 'SI64397745065188826'
        }
      }
    ]
  };

  fetchData(): Array<object> {
   return this.transactionList.data;
  }

  setPaymentDeatils(paymentDetail: object) {
    this.paymentDetail = paymentDetail;
  }

  setRedirect(value) {
    this.redirect = true;
  }

  getRedirect() {
    return this.redirect;
  }

  getPaymentDetail(): object {
    return this.paymentDetail;
  }

  setBalance(value: number) {
    this.balance$.next(value);
  }

  getBalance(): Observable<number> {
    return this.balance$.asObservable();
  }

  transferAmount(data) {
    const today = new Date().toDateString();
    this.transactionList.data.unshift({
        'categoryCode': '#12a580',
        'imgPath': '../../assets/icons/7-eleven.png',
        'dates': {
          'valueDate': today
        },
        'transaction': {
          'amountCurrency': {
            'amount': data.amount,
            'currencyCode': 'EUR'
          },
          'type': 'Salaries',
          'creditDebitIndicator': 'CRDT'
        },
        'merchant': {
          'name': data.toAccount,
          'accountNumber': 'SI64397745065188826'
        }
    });
  }
}
