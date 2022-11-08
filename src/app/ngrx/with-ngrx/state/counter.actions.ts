import {createAction} from "@ngrx/store";

const actionHeader = '[Counter]'

export const increment = createAction('${actionHeader} increment');
export const decrement = createAction('${actionHeader} decrement');
export const reset = createAction('${actionHeader} reset');
export const calculation = createAction('{$actionHeader} calculation');
export const resetCalculation = createAction('{$actionHeader} resetCalculation');
