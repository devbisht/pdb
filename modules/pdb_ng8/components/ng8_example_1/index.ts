/**
 * @module Ng8Example1
 * @preferred
 */ /** */

// lib imports
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// external imports
import {LazyLoadComponent} from 'helpers/lazy-load-component';
// internal imports
import {Ng8Example1} from './component';
// exports
export * from './globals';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: Ng8Example1}
    ],
    declarations: [
        Ng8Example1
    ],
    entryComponents: [
        Ng8Example1
    ]
})
export class Ng8Example1Module {}
