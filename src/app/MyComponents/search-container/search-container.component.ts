import { Component, OnInit} from '@angular/core';
import { CoronaAPIService } from 'src/app/API/corona-api.service';



@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css'],
})
export class SearchContainerComponent implements OnInit {


  myopts = {
    duration :2,
    useGrouping:true,
    useEasing:true
  }

  public SystemName: string = 'Cases';
  public lineChartData: Array<any> = [{}];
  // labels
  public lineChartLabels: Array<any> = [];

  selectedCountry: any;
  countryReceived: string = 'WorldWide';
  activeCases: number = 0;
  criticalCases: number = 0;
  totalDeaths: number = 0;
  totalCases: number = 0;
  testsDone: number = 0;

  country: string[] = [];
  casesData: any[] = [];

  constructor(private data: CoronaAPIService) {
    this.data.myCountry(this.selectedCountry);
    
  }

  ngOnInit(): any {
    
    this.data.coronaData().subscribe((data: any) => {
      const res = data;
      for (let item of res) {
        this.country.push(item.country);
      }
    });
    this.data.worldWideData().subscribe((data) => {
      console.log(data);
      this.activeCases = data.active;
      this.criticalCases = data.critical;
      this.totalCases = data.cases;
      this.totalDeaths = data.deaths;
      this.testsDone = data.tests;
    });

    this.data.graphData().subscribe((data) => {
      console.log(data);
      const everyData = Object.keys(data.cases).reverse().slice(0, 15);
      this.lineChartLabels = everyData;

      this.lineChartData =[
        {
          data:  Object.values(data.cases).reverse().slice(0, 15),
          label : "Cases"
        },
        {
          data : Object.values(data.deaths).reverse().slice(0,15),
          label:"Deaths"
        },
        {
          data:Object.values(data.recovered).reverse().slice(0,15),
          label:"Recovered"
        }
      ]
      
    });
  }

  async getCountry(item: any) {
    this.selectedCountry = item;
    const value = await fetch(
      `https://disease.sh/v3/covid-19/countries/${this.selectedCountry}`
    );
    const res = await value.json();
    this.countryReceived = this.selectedCountry;
    this.activeCases = res.active;
    this.criticalCases = res.critical;
    this.totalCases = res.cases;
    this.totalDeaths = res.deaths;
    this.testsDone = res.tests;

    const newValue = await fetch(
      `https://disease.sh/v3/covid-19/historical/${this.selectedCountry}`
    );
    console.log(this.selectedCountry);
    const newRes = await newValue.json();
    console.log(newRes);

    this.lineChartData =[
      {
        data:  Object.values(newRes.timeline.cases).reverse().slice(0, 15),
        label : "Cases"
      },
      {
        data : Object.values(newRes.timeline.deaths).reverse().slice(0,15),
        label:"Deaths"
      },
      {
        data:Object.values(newRes.timeline.recovered).reverse().slice(0,15),
        label:"Recovered"
      }
    ]


  }
}
