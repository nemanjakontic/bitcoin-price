import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavigationModule } from './navigation/navigation.module';
import { LoaderModule } from './loader/loader.module';
import { FooterModule } from './footer/footer.module';
import { HttpRequestInterceptor } from './interceptors/http-request.interceptor';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    NavigationModule,
    LoaderModule,
    RouterModule,
    FooterModule
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
    NavigationModule,
    LoaderModule,
    RouterModule,
    FooterModule
  ]
})
export class CoreModule { }
