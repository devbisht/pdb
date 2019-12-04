/**
 * @module Ng8ExampleConfiguration
 * @preferred
 */ /** */

// lib imports
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// external imports
import {LazyLoadComponent} from 'helpers/lazy-load-component';
// internal imports
import {Ng8ExampleNode} from './component';
// exports
export * from './globals';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: Ng8ExampleNode}
    ],
    declarations: [
        Ng8ExampleNode
    ],
    entryComponents: [
        Ng8ExampleNode
    ]
})
export class Ng8ExampleNodeModule {}
