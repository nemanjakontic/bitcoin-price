import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading = false;

  constructor(
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.listenToLoading();
  }

  listenToLoading(): void {
    this.loadingService.loadingSub
      .pipe(delay(0))
      .subscribe((loading: boolean) => {
        this.loading = loading;
      })
  }

}
