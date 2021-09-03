import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { LoadingService } from './loading.service';



@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    LoadingService
  ],
  exports: [
    LoaderComponent
  ]
})
export class LoaderModule { }
