import { Component, OnInit } from '@angular/core';
import { Heroes } from './mock/mock-heroes';
import { Hero } from './models/hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit{

  
  title = 'Tour of Heroes';

  heroes: Hero[];

  selectedHero: Hero;
  constructor(private heroService: HeroService) { 

  }

  ngOnInit(): void{
    this.getHeroes();
  }

  getHeroes(): void {
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


