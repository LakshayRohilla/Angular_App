import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section7Component } from './section7/section7.component';
import {BasicHighlightDirective} from "./basic-highligh/basic-highlight.directive";
import {BetterHighlightDirective} from "./better-highlight/better-highlight.directive";
import { UnlessDirective } from './unless.directive';



@NgModule({
  declarations: [
    Section7Component,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  exports: [
    Section7Component
  ],
  imports: [
    CommonModule
  ]
})
export class Section7Module { }
