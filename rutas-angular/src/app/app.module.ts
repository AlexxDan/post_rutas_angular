import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { LosangelesComponent } from './components/losangeles/losangeles.component';
import { NewyorkComponent } from './components/newyork/newyork.component';
import { PadreComponent } from './components/padre/padre.component';
import { Hija1Component } from './components/hija1/hija1.component';
import { Hija2Component } from './components/hija2/hija2.component';
import { ParametroComponent } from './components/parametro/parametro.component';
import { Error404Component } from './components/error404/error404.component';
import { HomepadreComponent } from './components/homepadre/homepadre.component';
import {routing,appRoutingProviders } from "./app.routing"

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LosangelesComponent,
    NewyorkComponent,
    PadreComponent,
    Hija1Component,
    Hija2Component,
    ParametroComponent,
    Error404Component,
    HomepadreComponent
  ],
  imports: [
    BrowserModule,routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
