import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { MainBodyComponent } from './MyComponents/main-body/main-body.component';
import { VaccinationComponent } from './MyComponents/vaccination/vaccination.component';

const routes: Routes = [
   {
    path:'vaccination', component:VaccinationComponent
  },
  {
    path:"", component:MainBodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
