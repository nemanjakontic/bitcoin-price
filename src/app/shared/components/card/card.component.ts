import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'pro-glove-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  /**
   * Headline for card component
   */
  @Input() headline?: string;

  /**
   * Sub-headline for card component
   */
  @Input() subheadline?: string;

  /**
   * Name for action button
   */
  @Input() actionName?: string;

  /**
   * Emits when the action button was clicked
   */
  @Output() actionButtonClicked = new Subject();

  /**
   * Method for handling action button click
   */
  reloadInformation(): void {
    this.actionButtonClicked.next();
  }
}
