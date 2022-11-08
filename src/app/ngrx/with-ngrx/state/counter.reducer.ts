import {Action, createReducer, on} from "@ngrx/store";
import {initialState} from "./counter.state";
import {calculation, decrement, increment, reset, resetCalculation} from "./counter.actions";



const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
      // counter: state.counterWidget(counter + 1),
      // state.NgrxCounterState.counter: state.counter + 1,
    }
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    }
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    }
  }),
  on(calculation, (state) => {
    return {
      ...state,
      counterCal: state.counter * 10 + 10,
    }
  }),
  on(resetCalculation, (state) => {
    return {
      ...state,
      counterCal: 0,
    }
  })
);

export function counterReducer(state: { counter: number; counterCal:number; } | undefined, action: Action) {
  return _counterReducer(state, action);
}
