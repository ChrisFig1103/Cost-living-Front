import { Component } from '@angular/core';
import {FreeCurrencyService} from './free-currency.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'living-cost';
  constructor( private api:FreeCurrencyService){

  }

  ngOnInit(){
    this.api.apiCall().subscribe((data)=>{
      console.log("get api data",data);
    })
  }

}
