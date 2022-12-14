import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {calculation, decrement, increment, reset, resetCalculation} from "../state/counter.actions";

@Component({
  selector: 'app-ngrx-counter-buttons',
  templateUrl: './ngrx-counter-buttons.component.html',
  styleUrls: ['./ngrx-counter-buttons.component.scss']
})
export class NgrxCounterButtonsComponent implements OnInit {

  constructor(private store: Store<{ counterStore: { counter: number, counterCal: number }}>) { }
  // Here the first counter is from app.module.ts file.
  // here we are injecting the store to get the object.
  ngOnInit(): void {
  }

  onIncrement() {
    this.store.dispatch(increment())
  }

  onDecrement() {
    this.store.dispatch(decrement())
  }

  onReset() {
    this.store.dispatch(reset())
  }

  onCalculation() {
    this.store.dispatch(calculation())
  }

  onResetCalculation() {
    this.store.dispatch(resetCalculation())
  }

}
