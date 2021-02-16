import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  transferForm: FormGroup;
  accountBalance: any;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private dataService: GetDataService
  ) { 
    this.createForm();
  }

  ngOnInit(): void {
    this.dataService.getBalance().subscribe(val => {
      this.accountBalance = val;
    });
    this.transferForm.patchValue({
      fromAccount : `Free Checking(4296) ${this.accountBalance}`
    });
  }

  createForm() {
    this.transferForm = this.fb.group({
       fromAccount: [{value: '', disabled: true }, [Validators.required]],
       toAccount : ['', [Validators.required]],
       amount : ['', [Validators.required]]
    });
  }

  submit() {
    if (this.transferForm.valid) {
    this.dataService.setPaymentDeatils(this.transferForm.getRawValue());
    this.dataService.setRedirect(true);
    this.route.navigate(['preview']);
    }
  }
}

