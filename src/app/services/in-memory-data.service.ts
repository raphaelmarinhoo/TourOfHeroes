import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../interfaces/Hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Spider Man', power: 'Habilidades de aranha' },
      { id: 12, name: 'Hulk', power: 'Super força' },
      { id: 13, name: 'Batman', power: 'Super inteligência' },
      { id: 14, name: 'Super Man', power: 'Super força' },
      { id: 15, name: 'Shazam', power: 'Super força' },
      { id: 16, name: 'Wonder Woman', power: 'Super Força' },
      { id: 17, name: 'Flash', power: 'Super velocidade' },
      { id: 18, name: 'Hawkeye', power: 'Mira de águia' },
      { id: 19, name: 'Thor', power: 'Deus do trovão' },
      { id: 20, name: 'Captain America', power: 'Super soldado' }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}