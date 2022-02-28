import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderModule } from './loader/loader.module';
import { HttpRequestInterceptor } from './interceptors/http-request.interceptor';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    LoaderModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    },
  ],
  exports: [
    HttpClientModule,
    LoaderModule,
    RouterModule
  ]
})
export class CoreModule { }
