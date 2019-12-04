/**
 * @module Ng8Example2
 * @preferred
 */ /** */

// lib imports
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
// external imports
import {LazyLoadComponent} from 'helpers/lazy-load-component';
// internal imports
import {Ng8Example2} from './component';
// exports
export * from './globals';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: Ng8Example2}
    ],
    declarations: [
        Ng8Example2
    ],
    entryComponents: [
        Ng8Example2
    ]
})
export class Ng8Example2Module {}
