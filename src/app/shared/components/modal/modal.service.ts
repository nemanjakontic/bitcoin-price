import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService implements OnDestroy {
  /**
   * Emit open event
   */
  onOpen: EventEmitter<boolean> = new EventEmitter();

  /**
   * Emit close event
   */
  onClose: EventEmitter<boolean> = new EventEmitter();

  /**
   * For unsubscribing on OnDestroy
   */
  private _unsubscribe: Subject<void> = new Subject();

  /**
   * Property for storing the route
   * which is behind the modal
   */
  route?: string;

  /**
   * Creates an instance of ModalService.
   * @param {Router} router
   */
  constructor(private router: Router) {}

  /**
   * For cleanup when instance is destroyed
   */
  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  /**
   * We use this method to open the modal
   * @param {string} modal - this is the modal route
   */
  open(modal: string, route: string): void {
    if (modal && route) {
      if (route.includes('modal:')) {
        this.route = route.split('(')[0];
      } else {
        this.route = route;
      }
      this.router.navigate([this.route, { outlets: { modal } }], {
        skipLocationChange: true
      });
    }
  }

  /**
   * Method for closing the modal
   * We navigate to current route, without modal
   */
  close(): void {
    this.router.navigate([this.route, { outlets: { modal: null } }]);
    // resetting the current route
    this.route = '';
  }
}
