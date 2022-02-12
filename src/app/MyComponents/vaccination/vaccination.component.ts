import { Component, OnInit } from '@angular/core';
import {CoronaAPIService} from 'src/app/API/corona-api.service'

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.css']
})
export class VaccinationComponent implements OnInit {

  constructor(private data : CoronaAPIService) { }
  public lineChartData: Array<any> = [{}];
  public lineChartLabels: Array<any> = [];
  countries :any[] = [];

  ngOnInit(): void {

    this.data.coronaData().subscribe((res:any[])=>{
      console.log(res);
      const data1 = res;
      data1.forEach(element => {
        
        this.countries.push(element.country);

        
      });
      
      
      
    })
    

    this.data.getIndiaStateWiseData().subscribe((res)=>{
     
      const data1 = res;
      
      const labels = Object.keys(res);
      this.lineChartLabels = labels;
      this.lineChartData =[
        {
          data:  Object.values(data1),
          label : "Vaccination Completed"
        }
        
      ]
      
    })
    
  }
  getCountry(item:any){
   
    
    this.data.getVaccinationDetails(item).subscribe((res)=>{
      
      

      const data1 = res;
      
      const labels = Object.keys(res.timeline);
      this.lineChartLabels = labels;
      this.lineChartData =[
        {
          data:  Object.values(data1.timeline),
          label : "Vaccination Done"
        }
        
      ]

    })
  }

}
