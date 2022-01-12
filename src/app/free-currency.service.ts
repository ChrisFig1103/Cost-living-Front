import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FreeCurrencyService {

  constructor(
    private http:HttpClient
  ) { }

    apiCall(){
      return this.http.get('https://freecurrencyapi.net/api/v2/latest?apikey=3a04fe00-68de-11ec-b8a6-0bf8cfad6df8');
    }


}
