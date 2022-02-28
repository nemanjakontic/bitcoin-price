import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BitcoinData } from '../../interfaces/bitcoin-data.interface';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(
    private http: HttpClient
  ) { }

  getBitcoinPrice(): Observable<BitcoinData> {
    return this.http.get<BitcoinData>(environment.apiEndpoint);
  }
}
