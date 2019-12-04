import { Component, Input } from '@angular/core';

import { Hero } from '../hero';

@Component({
  moduleId: __moduleName,
  selector: 'ng8-hero-detail',
  templateUrl: 'template.html',
})
export class Ng8HeroDetail {
  @Input() 
  hero: Hero;
}
