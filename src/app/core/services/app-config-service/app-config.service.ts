import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../../interfaces/config.interface';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private config!: Config;
  constructor(private http: HttpClient) {}

  public loadConfig(): any {
    return this.http
      .get('../../../../assets/config/config.json')
      .toPromise()
      .then((config: any) => {
        this.config = config;
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  getConfig(): Config {
    return this.config;
  }
}
