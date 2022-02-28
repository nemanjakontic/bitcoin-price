import { Component, OnInit } from '@angular/core';
import { BitcoinFacade } from 'src/app/core/facade/bitcoin.facade';

@Component({
  selector: 'pro-glove-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  bpi?: any;
  theLastRequestTimestamp = Math.floor(new Date().getTime());
  currentRateFloat?: number;
  trendString?: string;

  constructor(
    private bitcoinFacade: BitcoinFacade
  ) { }

  ngOnInit(): void {
    /**
     * Subscription for getting the latest info about price
     */
    this.bitcoinFacade.bitcoinInfoSubject
      .subscribe((data: any) => {
        this.getPriceAndTrendInfo(data);
      });
  }

  /**
   * Method for getting updated information
   * on button click
   */
  reloadPrice(): void {
    const currentTime = Math.floor(new Date().getTime());

    if (currentTime - this.theLastRequestTimestamp > 10000) {
      this.bitcoinFacade.getBitcoinPrice();
    }
  }

  /**
   * Method for setting indicator text and
   * memory of the last rate
   */
  getPriceAndTrendInfo(data: any): void {
    this.bpi = data.bpi;
    if (this.currentRateFloat) {
      if (this.currentRateFloat < data.bpi.EUR.rate_float) {
        this.trendString = 'UP';
      } else if (this.currentRateFloat === data.bpi.EUR.rate_float) {
        this.trendString = 'No trend available';
      } else {
        this.trendString = 'DOWN';
      }
    } else {
      this.trendString = '';
    }
    if (data.bpi.EUR && data.bpi.EUR.rate_float) {
      this.currentRateFloat = data.bpi.EUR?.rate_float;
    }
    this.theLastRequestTimestamp = Math.floor(new Date().getTime());
  }

  /**
   * Method for getting right color for indicator
   */
  getTrendColor(): string {
    switch (this.trendString) {
      case 'UP':
        return 'green';
      case 'DOWN':
        return 'red';
      default:
        return '';
    }
  }

}
