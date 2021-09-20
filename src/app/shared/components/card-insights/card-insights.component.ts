import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-insights',
  templateUrl: './card-insights.component.html',
  styleUrls: ['./card-insights.component.scss'],
})
export class CardInsightsComponent {

  /**
   * Boolean to determine on which page is card
   */
  @Input() dealPosts!: boolean;
  @Input() productPosts!: boolean;
  @Input() reviews!: boolean;

  widthNumber = 50;

}
