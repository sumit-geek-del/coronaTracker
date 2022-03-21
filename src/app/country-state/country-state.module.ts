import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryStateRoutingModule } from './country-state-routing.module';
import { StateWiseDataComponent } from './state-wise-data/state-wise-data.component';
import {MatSelectModule} from '@angular/material/select'
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator'

@NgModule({
  declarations: [
    StateWiseDataComponent
  ],
  imports: [
    CommonModule,
    CountryStateRoutingModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule

  ]
})
export class CountryStateModule { }
