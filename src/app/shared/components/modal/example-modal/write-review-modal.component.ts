import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-write-review-modal',
  templateUrl: './write-review-modal.component.html',
  styleUrls: ['./write-review-modal.component.scss']
})
export class WriteReviewModalComponent implements OnInit {

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }


  /**
   * Closing the modal
   */
   closeModal(): void {
    this.modalService.close();
  }


  /**
   * We will get here maybe some data from the modal
   * ?We don't use it now, but maybe we will in future
   */
  openModal({ something }: any): void {

  }
}
