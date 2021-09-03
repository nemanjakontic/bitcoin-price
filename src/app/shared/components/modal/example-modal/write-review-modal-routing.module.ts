import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WriteReviewModalComponent } from './write-review-modal.component';

const routes: Routes = [
  {
    path: 'write-review',
    component: WriteReviewModalComponent,
    outlet: 'modal'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriteReviewModalRoutingModule { }
