import { Component, OnInit } from '@angular/core';
import { BitcoinFacade } from 'src/app/core/facade/bitcoin.facade';

interface PriceWithTimestamp {
  price?: number;
  timestamp?: Date;
}

@Component({
  selector: 'pro-glove-bitcoin-table',
  templateUrl: './bitcoin-table.component.html',
  styleUrls: ['./bitcoin-table.component.scss']
})
export class BitcoinTableComponent implements OnInit {

  bitcoinPriceWithTimestamp: PriceWithTimestamp[] = [];

  constructor (
    private bitcoinFacade: BitcoinFacade
  ) {}

  ngOnInit(): void {
    this.bitcoinFacade.bitcoinInfoSubject
      .subscribe((data: any) => {
        const newBitcoinArray = this.bitcoinPriceWithTimestamp;
        newBitcoinArray.push({price: data.bpi.EUR.rate_float, timestamp: new Date()});
        this.bitcoinPriceWithTimestamp = newBitcoinArray;
      });
  }
}
