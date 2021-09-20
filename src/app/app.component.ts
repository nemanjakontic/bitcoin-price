import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConfigService } from './core/services/app-config-service/app-config.service';

@Component({
  selector: 'senscare-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-structure';

  constructor(
    private config: AppConfigService,
    private translate: TranslateService
  ) {
    this.translate.addLangs(['en_GB']);
    this.translate.setDefaultLang('en_GB');
    this.translate.use('en_GB');
  }
}
