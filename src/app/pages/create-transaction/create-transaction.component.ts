import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { TransactionsTableComponent } from 'src/app/components/transactions-table/transactions-table.component';
import {Transaction} from 'SavjeeCoin/src/blockchain' ;

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  public newTx;
  public walletKey;

  constructor(private blockchainService: BlockchainService) {
    this.walletKey = blockchainService.walletKeys[0]; 
   }

  ngOnInit() {
    this.newTx = new TransactionsTableComponent();
  }

  createTransaction(){
    this.newTx.fromAddress = this.walletKey.publicKey;
    this.newTx.signTransaction(this.walletKey.keyObj);

    this.blockchainService.addTransaction(this.newTx);
    this.newTx = new Transaction();
  }

}
