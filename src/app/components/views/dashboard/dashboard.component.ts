import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Transaction } from 'src/app/resources/models/transaction';
import { AuthService } from 'src/app/resources/services/auth/auth.service';
import { TransactionsService } from 'src/app/resources/services/transactions/transactions.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['operacao', 'saldo'];
  transactionsList!: Observable<Transaction[]>;

  currentUser: any = {};
  saldo:any;

  cid: any;

  constructor(protected authService: AuthService, private router: Router, protected transactions:TransactionsService,private actRoute: ActivatedRoute) {

    //get utilizador através do id na route - auth service
    this.cid = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(this.cid).subscribe((res) => {
      this.currentUser = res.msg;
    });

   }

  ngOnInit(): void {

    //get total de despesas - transactions service
    this.transactionsList = this.transactions.getTransfers(this.cid);
    this.getTotalCost();
  }

  //get last valor guardado do saldo
  getTotalCost() {
    return this.transactionsList.subscribe((data)=> this.transactions.latestSaldo = data[data.length - 1].saldo);
  }

}
