import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrizeService {

  private readonly PRIZE_KEY = 'prizes';
  constructor() { }

  getPrizes(): { name: string }[] {
    const prizesJson = localStorage.getItem(this.PRIZE_KEY);
    return prizesJson ? JSON.parse(prizesJson) : null;
  }

  savePrize(prizes: { name: string }[]): void {
    localStorage.setItem(this.PRIZE_KEY, JSON.stringify(prizes));
  }

  removePrizeFromStorage(prize: { name: string }): void {
    const prizesString = localStorage.getItem('prizes');
    if (prizesString) {
      const prizes = JSON.parse(prizesString);
      const updatedPrizes = prizes.filter((p: { name: string; }) => p.name !== prize.name);
      this.savePrize(updatedPrizes);
    }
  }

}
