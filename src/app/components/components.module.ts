import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CalculatorComponent } from './calculator/calculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    CalculatorComponent,
    DashboardComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CalculatorComponent
  ]
})
export class ComponentsModule { }
