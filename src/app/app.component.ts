import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pro Glove';

  constructor(
    private translate: TranslateService
  ) {
    this.translate.addLangs(['en_GB']);
    this.translate.setDefaultLang('en_GB');
    this.translate.use('en_GB');
  }
}
