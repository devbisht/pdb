/**
 * @module Ng2ExampleConfiguration
 * @preferred
 */ /** */

// lib imports
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
// external imports
import {LazyLoadComponent} from 'helpers/lazy-load-component';
// internal imports
import {Ng8Todo} from './component';
// exports
export * from './globals';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: Ng8Todo}
    ],
    declarations: [
        Ng8Todo
    ],
    entryComponents: [
        Ng8Todo
    ]
})
export class Ng8TodoModule {}
