import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-toggle-buttons',
  templateUrl: './toggle-buttons.component.html',
  styleUrls: ['./toggle-buttons.component.scss']
})
export class ToggleButtonsComponent{
  /**
   * Text for buttons
   */
  @Input() firstButton!: string;
  @Input() secondButton!: string;
  @Input() thirdButton!: string;
  @Input() forthButton!: string;
}
