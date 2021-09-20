import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'senscare-image-overlay',
  templateUrl: './image-overlay.component.html',
  styleUrls: ['./image-overlay.component.scss']
})
export class ImageOverlayComponent implements OnInit {

  @Input() showOverlay!: boolean;
  @Input() image!: string;
  @Input() index!: number;

  @Output() closeOverlay = new Subject<boolean>();
  @Output() imageToggle = new Subject<number>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Click on backdrop closes the overlay
   * @memberof ImageOverlayComponent
   */
  closeImageOverlay(): void {
    this.showOverlay = false;
    this.closeOverlay.next(this.showOverlay);
  }

  /**
   *
   * @memberof ImageOverlayComponent
   */
  previousImage(): void {
    this.index--;
    this.imageToggle.next(this.index);
  }

  /**
   *
   * @memberof ImageOverlayComponent
   */
  nextImage(): void {
    this.index++;
    this.imageToggle.next(this.index);
  }

}
