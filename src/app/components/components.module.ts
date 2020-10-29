import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CalculatorComponent
  ]
})
export class ComponentsModule { }
