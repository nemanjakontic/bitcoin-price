import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WriteReviewModalRoutingModule } from './write-review-modal-routing.module';
import { WriteReviewModalComponent } from './write-review-modal.component';
import { ModalModule } from '../modal.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    WriteReviewModalComponent
  ],
  imports: [
    CommonModule,
    WriteReviewModalRoutingModule,
    TranslateModule,
    ModalModule
  ],
  exports: [
    WriteReviewModalComponent
  ]
})
export class WriteReviewModalModule { }
