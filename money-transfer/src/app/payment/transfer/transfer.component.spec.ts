import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'
import { GetDataService } from '../../services/get-data.service';

import { TransferComponent } from './transfer.component';

describe('TransferComponent', () => {
  let component: TransferComponent;
  let fixture: ComponentFixture<TransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferComponent ],
      imports: [ ReactiveFormsModule, RouterTestingModule ],
      providers: [GetDataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should create a form using formbuilder', () => {
    component.createForm();
    expect(component.transferForm instanceof FormGroup).toBeTruthy();
  });

  it('should send data', () =>{
    expect(component.accountBalance).toBe(5000, 'at first');
    component.transferForm.patchValue({
      toAccount : 'Prathap',
      amount : 1000
    });
    expect(component.transferForm.valid).toBe(true, 'after filling values');
    component.submit();
  });

});
