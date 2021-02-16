import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { GetDataService } from 'src/app/services/get-data.service';

import { PreviewComponent } from './preview.component';


xdescribe('PreviewComponent', () => {
  let component: PreviewComponent;
  let fixture: ComponentFixture<PreviewComponent>;
  let amountEle: HTMLElement;
  let paymentInfoStub;

  paymentInfoStub = {
    //toAccount : 'Prathap',
    amount : 1000
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewComponent ],
      imports: [RouterTestingModule],
      providers: [ { provide : GetDataService, useValue: paymentInfoStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewComponent);
    component = fixture.componentInstance;
    amountEle = fixture.nativeElement.getElementsByClassName('amount');
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get payment info', () => {
    GetDataService
     expect(amountEle.textContent).toContain(component.transferDetail.amount);
   // expect(component.transferDetail.valid).toEqual(true, 'transfer data valid');
   // component.transfer();
  });
});
