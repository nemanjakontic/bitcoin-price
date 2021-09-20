import { Component, Input } from '@angular/core';

@Component({
  selector: 'senscare-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  /**
   * Boolean to determine on which page is card
   */
  @Input() businessDirectory!: boolean;
  @Input() businesses!: boolean;
  @Input() deals!: boolean;
  @Input() dealsProfile!: boolean;
  @Input() dealRequests!: boolean;

  /**
   * Input fields for card on Business directory page
   */
  @Input() directoryName!: string;
  @Input() location!: string;
  @Input() image!: string;
  @Input() numberOfLikes!: string;
}
