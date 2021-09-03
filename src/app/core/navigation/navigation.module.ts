import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { TranslateModule } from '@ngx-translate/core';

import { SearchBarModule } from 'src/app/shared/components/search-bar/search-bar.module';
import { RouterModule } from '@angular/router';
import { SearchBarMobileModule } from 'src/app/shared/components/search-bar-mobile/search-bar-mobile.module';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SearchBarModule,
    SearchBarMobileModule,
    TranslateModule.forRoot()
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
