import { Component } from '@angular/core';
import {CoronaAPIService} from './API/corona-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corona-tracker';

  countryReceived :any;

  sendCountryToNextComp(data:any){
   this.countryReceived = data;
  }

}
