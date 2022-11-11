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
import {NgrxCounterButtonsComponent} from "./ngrx/with-ngrx/ngrx-counter-buttons/ngrx-counter-buttons.component";
import {NgrxCounterOutputComponent} from "./ngrx/with-ngrx/ngrx-counter-output/ngrx-counter-output.component";
import {NgrxCounterComponent} from "./ngrx/with-ngrx/ngrx-counter/ngrx-counter.component";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./ngrx/with-ngrx/state/counter.reducer";
import {Assignment4Module} from "./assignment-4/assignment-4.module";

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
    CounterButtonsComponent,
    NgrxCounterButtonsComponent,
    NgrxCounterOutputComponent,
    NgrxCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Assignment4Module,
    FormsModule,
    StoreModule.forRoot({counterStore: counterReducer})
    // here other than "counter" you can give any name and you would be using it inside the component.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
