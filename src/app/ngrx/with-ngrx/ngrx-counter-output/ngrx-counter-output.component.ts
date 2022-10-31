import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Subscriber, Subscription} from "rxjs";

@Component({
  selector: 'app-ngrx-counter-output',
  templateUrl: './ngrx-counter-output.component.html',
  styleUrls: ['./ngrx-counter-output.component.scss']
})
export class NgrxCounterOutputComponent implements OnInit, OnDestroy {
  counterSubscriber: Subscription = new Subscription();
  counter: number = 0;
  constructor(private store: Store<{counter: {counter: number}}>) { }
  //here we are injecting the store to get the counter value.
  ngOnInit(): void {
    this.counterSubscriber = this.store.select('counter').subscribe((data) => {
      // select will gives the observables.
      this.counter = data.counter; //<-- store
      });
  }

  ngOnDestroy(): void {
    this.counterSubscriber.unsubscribe();
  }
}
