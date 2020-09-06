import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DatatableComponent } from './body/datatable/datatable.component';
import { MobileComponent } from './body/mobile/mobile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatatableComponent,
    MobileComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
