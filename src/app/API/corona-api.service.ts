import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, retry, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaAPIService {
  url = 'https://disease.sh/v3/covid-19/countries';

  myCountry$ : Observable<any>;
  private myCountrySubject = new Subject<any>();

  dataNew !:any;

  constructor(private data:HttpClient) { 
    this.myCountry$ = this.myCountrySubject.asObservable();
  }

  myCountry(data:any){
    this.dataNew = data;
    this.myCountrySubject.next(data);
  }

  coronaData(){
    const data = this.data.get<any>(this.url);
    return data;
  }
  worldWideData(){
    const worldData = this.data.get<any>('https://disease.sh/v3/covid-19/all');
    return worldData;
  }
  graphData(){
      
    const apiData = this.data.get<any>('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    return apiData;
    
  }


}
