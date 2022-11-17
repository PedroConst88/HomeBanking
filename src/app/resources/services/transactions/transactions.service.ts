import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Transaction } from 'src/app/resources/models/transaction';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  latestSaldo:any;

  constructor(private http: HttpClient) { }


  getTransfers(cid: any): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${environment.apiUrl}/list-transactions?id=`+ cid);
  }


  addTransfer(transaction: Transaction) {
    const httpHeaders = { headers:new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.post<Transaction>(`${environment.apiUrl}/add-transaction`, transaction, httpHeaders)
  }

  
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
  
}
