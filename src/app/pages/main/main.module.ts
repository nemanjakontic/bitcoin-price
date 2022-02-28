import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { from, Observable } from 'rxjs';
import { CardListModule } from 'src/app/shared/components/card-list/card-list.module';
import { BitcoinTableModule } from 'src/app/shared/components/bitcoin-table/bitcoin-table.module';

export class LazyTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return from(import(`../../../assets/i18n/main-page/${lang}.json`));
  }
}

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CardListModule,
    BitcoinTableModule,
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
export class MainModule { }
