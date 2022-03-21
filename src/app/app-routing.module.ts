import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBodyComponent } from './MyComponents/main-body/main-body.component';
import { VaccinationComponent } from './MyComponents/vaccination/vaccination.component';

const routes: Routes = [
   {
    path:'vaccination', component:VaccinationComponent
  },
  {
    path:"", component:MainBodyComponent
  },
  {
    path:"states", loadChildren:()=>import('./country-state/country-state.module').then((m)=>{
      return m.CountryStateModule;
    }).catch((e)=>{
      console.log(e);
    })
  },
  {
    path:'**', redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
