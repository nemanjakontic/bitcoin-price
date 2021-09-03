import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  /**
   * Boolean to determine on which page is card
   */
   @Input() profileReviews!: boolean;
   @Input() reviews!: boolean;
   @Input() products!: boolean;
   @Input() productsProfile!: boolean;
   @Input() quoteRequests!: boolean;
   @Input() index!: number;

  toggleOpen = false;

  /**
   * Toggling card opening
   */
  toggleDetails(): void {
    document.getElementById('bottom-part-' + this.index)?.classList.toggle('visible');
    this.toggleOpen = !this.toggleOpen;
  }
}
