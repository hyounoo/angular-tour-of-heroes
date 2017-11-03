import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { Heroes } from '../mock/mock-heroes';

@Injectable()
export class HeroService {
  
  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(Heroes);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}
