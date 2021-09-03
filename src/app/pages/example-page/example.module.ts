import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { from, Observable } from 'rxjs';

export class LazyTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return from(import(`../../../assets/i18n/example-page/${lang}.json`));
  }
}

@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    TranslateModule.forChild({
      defaultLanguage: 'en_GB',
      isolate: true,
      loader: {
        provide: TranslateLoader,
        useClass: LazyTranslateLoader
      }
    })
  ]
})
export class ExampleModule { }
