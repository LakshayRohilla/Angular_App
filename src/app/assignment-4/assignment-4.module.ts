import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';



@NgModule({
  declarations: [
    GamecontrolComponent,
    OddComponent,
    EvenComponent
  ],
  exports: [
    GamecontrolComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Assignment4Module { }
