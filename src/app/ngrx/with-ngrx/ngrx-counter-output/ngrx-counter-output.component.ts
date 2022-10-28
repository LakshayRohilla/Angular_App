import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-ngrx-counter-output',
  templateUrl: './ngrx-counter-output.component.html',
  styleUrls: ['./ngrx-counter-output.component.scss']
})
export class NgrxCounterOutputComponent implements OnInit {
  counter: number = 0;
  constructor(private store: Store<{counter: {counter: number}}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      this.counter = data.counter;
      });
  }
}
