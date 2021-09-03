import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  /**
   * We will use this output if we have some data which we need to pass
   * to the modal component (not this base)
   * ?We don't use it now, but we probably will in future if we have some data for modal
   */
  @Output() onOpen: EventEmitter<any> = new EventEmitter<any>();

  /**
   * We will use this if we need to navigate
   * to somewhere after closing the modal
   * ?We don't use it now, but we probably will in future if we have some data for modal
   */
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Creates an instance of ModalComponent.
   * @param {ModalService} modalService
   * @memberof ModalComponent
   */
  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    // document.getElementById('modal')?.classList.toggle('fade');
  }

  close(): void {
    this.modalService.close();
  }

}
