import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IamusDateModule, IamusDateService} from "iamus-date";
import {IamusWeatherModule} from "iamus-weather";
import {HttpClientModule} from "@angular/common/http";




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IamusDateModule,
    IamusWeatherModule,
    HttpClientModule
  ],
  providers: [IamusDateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
