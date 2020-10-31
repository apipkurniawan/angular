import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NoDecimalPipe } from './pipes/no-decimal.pipe';

import { PrimeNgModule } from './prime-ng.module';
import '../core/array.prototype';

@NgModule({
    imports: [],
    exports: [
        PrimeNgModule,
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        BrowserModule,
        NoDecimalPipe
    ],
    declarations: [
        NoDecimalPipe
    ]
})
export class SharedModule { }