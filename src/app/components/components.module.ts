import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CalculatorComponent } from './calculator/calculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    CalculatorComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    SharedModule
  ],
  exports: []
})
export class ComponentsModule { }
