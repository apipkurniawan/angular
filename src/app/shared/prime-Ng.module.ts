import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        CardModule,
        InputTextModule,
        PanelMenuModule
    ],
    exports: [
        ButtonModule,
        CardModule,
        InputTextModule,
        PanelMenuModule
    ],
    declarations: []
})
export class PrimeNgModule { }