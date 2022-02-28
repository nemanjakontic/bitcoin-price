import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { of, Subject, Subscription, timer } from 'rxjs';
import { catchError, map, takeUntil, tap } from 'rxjs/operators';
import { BitcoinData } from '../interfaces/bitcoin-data.interface';
import { BitcoinService } from '../services/bitcoin/bitcoin.service';

@Injectable({
  providedIn: 'root'
})
export class BitcoinFacade implements OnDestroy {

  /**
   * For unsubscribing on OnDestroy
   */
  private _unsubscribe: Subject<void> = new Subject();

  /**
   * Subject for sharing latest info
   */
  bitcoinInfoSubject = new Subject();

  /**
   * Timer subscription
   */
  subscriptionTimer!: Subscription;

  constructor (
    private bitcoinService: BitcoinService,
    private router: Router
  ) {
    this.startTimer();
  }

  startTimer(): void {
    this.subscriptionTimer = timer(0, 60000)
      .pipe(
        map(() => {
          this.getBitcoinPrice();
        })
      ).subscribe();
  }

  /**
  * For cleanup when instance is destroyed
  */
  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
    this.subscriptionTimer.unsubscribe();
  }

  /**
   * Calling the method for latest info about bitcoin
   */
  getBitcoinPrice(): void {
    this.bitcoinService.getBitcoinPrice()
      .pipe(
        tap((response: BitcoinData) => this.bitcoinInfoSubject.next(response)),
        catchError((err: any) => {
          this.router.navigate(['error404']);
          return of(err);
        }),
        takeUntil(this._unsubscribe)
      ).subscribe();
  }
}
