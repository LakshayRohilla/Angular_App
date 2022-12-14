import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-ngrx-counter-output',
  templateUrl: './ngrx-counter-output.component.html',
  styleUrls: ['./ngrx-counter-output.component.scss']
})
export class NgrxCounterOutputComponent implements OnInit {
  counter: number = 0;
  counterCal: number = 0;

  constructor(private store: Store<{counterStore: {counter: number, counterCal: number}}>) { }
  //here we are injecting the store to get the counter value.
  ngOnInit(): void {
    this.store.select('counterStore').subscribe((data) => {
      // select will gives the observables.
      this.counter = data.counter;
      this.counterCal = data.counterCal;
      });
  }
}
