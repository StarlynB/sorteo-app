import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrizeService } from '../../services/prize.service';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.scss']
})
export class PrizesComponent implements OnInit {
  @Input() prizes: { name: string }[] = [];
  @Output() prizesChange = new EventEmitter<{ name: string }[]>();

  constructor(private _prizesServices: PrizeService) { }

  ngOnInit(): void {
    // Cargar premios desde el almacenamiento local al iniciar el componente
    const savedPrizes = this._prizesServices.getPrizes();
    if (savedPrizes) {
      this.prizes = savedPrizes;
    }
  }

  addPrize(): void {
    this.prizes.push({ name: '' });
    this.savePrizesToStorage();
    this.emitChanges();
  }

  removePrize(index: number): void {
    this.prizes.splice(index, 1);
    this.savePrizesToStorage();
    this.emitChanges();
  }

  private emitChanges(): void {
    if (this.prizesChange) {
      this.prizesChange.emit(this.prizes);
    }
  }

  private savePrizesToStorage(): void {
    this._prizesServices.savePrize(this.prizes);
  }
}
