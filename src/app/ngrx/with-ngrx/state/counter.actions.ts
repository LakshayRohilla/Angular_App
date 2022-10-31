import {createAction} from "@ngrx/store";

const actionTypeHeader = '[Counter]'

export const increment = createAction(`${actionTypeHeader} increment`);
export const decrement = createAction(`${actionTypeHeader} decrement`);
export const reset = createAction(`${actionTypeHeader} reset`);
