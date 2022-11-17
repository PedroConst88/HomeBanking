import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/resources/services/auth/auth.service';
import { TransactionsService } from 'src/app/resources/services/transactions/transactions.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/resources/models/transaction';

@Component({
  selector: 'app-new-trans',
  templateUrl: './new-trans.component.html',
  styleUrls: ['./new-trans.component.css']
})
export class NewTransComponent implements OnInit {

  transferForm!: FormGroup;
  isSubmitted  =  false;

  transactionsList!: Observable<Transaction[]>;

  isLinear = true;

  
  constructor(private _location: Location,protected authService: AuthService, private router: Router, protected transactions:TransactionsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.transferForm  =  this.formBuilder.group({
      cost: ['', Validators.required]
  });
  }

  get formControls() { return this.transferForm.controls; }


  //Post nova transferencia - transactions service
  AddTransfer(){
    this.isSubmitted = true;
    if(this.transferForm.invalid){
      return;
    }
    this.transactions.addTransfer(this.transferForm.value).subscribe(
      () => {
        this.transferForm.reset();
      }
    );;
  }

  
  backClicked() {
    this._location.back();
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

  getTotalCost(transactionsList: Transaction[] = []) {
    return transactionsList.map(t => t.operacao).reduce((acc, value) => acc + value, 0);
  }

}
