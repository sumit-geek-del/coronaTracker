import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { MainBodyComponent } from './MyComponents/main-body/main-body.component';
import { SearchContainerComponent } from './MyComponents/search-container/search-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgChartsModule} from 'ng2-charts'
import {CountUpModule} from 'ngx-countup';
import { VaccinationComponent } from './MyComponents/vaccination/vaccination.component';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBodyComponent,
    SearchContainerComponent,
    VaccinationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgChartsModule,
    CountUpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
