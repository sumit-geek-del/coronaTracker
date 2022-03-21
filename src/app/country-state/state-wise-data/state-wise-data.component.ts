import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {CoronaAPIService} from 'src/app/API/corona-api.service'
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-state-wise-data',
  templateUrl: './state-wise-data.component.html',
  styleUrls: ['./state-wise-data.component.css']
})
export class StateWiseDataComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource!:MatTableDataSource<any>;
  stateData:any[] = [];
  displayedColumns = ['State', 'Active', 'Recovered', 'Deaths', 'Cases' ]

  ngAfterViewInit(): void {
    
  }
  
  
  states:string[] = [];
  constructor(private dataApi:CoronaAPIService) { }

  ngOnInit(): void {
   this.dataApi.getCountryStateWiseData('India').subscribe((response:any)=>{
     this.stateData = response.states;
     this.dataSource = new MatTableDataSource(this.stateData);
    response.states.forEach((item:any)=>{
      this.states.push(item.state);
    })
   })
   this.dataSource.paginator = this.paginator;
  }

    
    

}
