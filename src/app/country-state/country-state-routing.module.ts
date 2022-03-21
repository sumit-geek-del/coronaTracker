import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateWiseDataComponent } from './state-wise-data/state-wise-data.component';

const routes: Routes = [
  {
    path:'',
    children:[{
      path:'', component:StateWiseDataComponent, pathMatch:'full'
    }]
  },
  {
    path:'**', redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryStateRoutingModule { }
