import { TestBed } from '@angular/core/testing';

import { GetDataService } from './get-data.service';

describe('GetDataService', () => {
  let service: GetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should get payment info', () => {
  //   expect(service.getPaymentDetail).toEqual({
  //     toAccount : 'Prathap',
  //     amount : 1000
  //   });
  // });
});
