/**
 * @module Ng8ExampleConfiguration
 * @preferred
 */ /** */

// lib imports
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
// external imports
import {LazyLoadComponent} from 'helpers/lazy-load-component';
// internal imports
import {Ng8Hero} from './component';
import {Ng8HeroDetail} from './ng8_hero_detail/component';
// exports
export * from './globals';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: Ng8Hero}
    ],
    declarations: [
        Ng8Hero,
        Ng8HeroDetail
    ],
    entryComponents: [
        Ng8Hero
    ]
})
export class Ng8HeroModule {}
