import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrimeNgModule } from './prime-Ng.module';

@NgModule({
    imports: [],
    exports: [
        PrimeNgModule,
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        BrowserModule
    ],
    declarations: []
})
export class SharedModule { }