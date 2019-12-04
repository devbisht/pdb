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
import {Ng8ExampleConfiguration} from './component';
// exports
export * from './globals';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: Ng8ExampleConfiguration}
    ],
    declarations: [
        Ng8ExampleConfiguration
    ],
    entryComponents: [
        Ng8ExampleConfiguration
    ]
})
export class Ng8ExampleConfigurationModule {}
