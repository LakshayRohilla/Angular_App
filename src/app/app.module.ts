import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { Server2Component } from './server2/server2.component';
import {FormsModule} from "@angular/forms";
import { Assignment2Component } from './assignment2/assignment2.component';
import { SECTION5cockpitComponent } from './section5cockpit/section5cockpit.component';
import { Section5serverElementComponent } from './section5server-element/section5server-element.component';
import { CounterComponent } from './ngrx/without-ngrx/counter/counter.component';
import { CounterOutputComponent } from './ngrx/without-ngrx/counter-output/counter-output.component';
import { CounterButtonsComponent } from './ngrx/without-ngrx/counter-buttons/counter-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Server2Component,
    Assignment2Component,
    SECTION5cockpitComponent,
    Section5serverElementComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
