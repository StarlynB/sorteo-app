import { Component } from '@angular/core';
import { PrizeService } from '../../services/prize.service';
import { PaticipantesService } from '../../services/paticipantes.service';

@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.scss']
})
export class SorteoComponent {

  participants: { name: string, department: string }[] = [];
  winners: { name: string, department: string, prize: string }[] = [];
  prizes: { name: string }[] = [];
  winner: string = '';
  winningPrize: string = '';
  winningDepartment: string = '';
  countdown: number = 0;

  constructor(private _participanteServices: PaticipantesService, private _prizesService: PrizeService) {
    this.participants = this._participanteServices.getData('participants') || [];
  }

  pickWinner(): void {
    if (this.participants.length > 0 && this.prizes.length > 0) {
      this.countdown = 5;
      const countdownInterval = setInterval(() => {
        this.countdown--;
        if (this.countdown === 0) {
          clearInterval(countdownInterval);
          const randomParticipantIndex = Math.floor(Math.random() * this.participants.length);
          const randomPrizeIndex = Math.floor(Math.random() * this.prizes.length);

          const winnerInfo = {
            name: this.participants[randomParticipantIndex].name,
            department: this.participants[randomParticipantIndex].department,
            prize: this.prizes[randomPrizeIndex].name
          };

          this.winners.push(winnerInfo);

          this.winner = winnerInfo.name;
          this.winningDepartment = winnerInfo.department;
          this.winningPrize = winnerInfo.prize;


          // Remove the selected prize from the prizes array
          const selectedPrize = this.prizes.splice(randomPrizeIndex, 1)[0];
          this._prizesService.removePrizeFromStorage(selectedPrize); //

          // Ocultar el ganador y el premio después de 6 segundos
          setTimeout(() => {
            this.resetWinner();
          }, 10000);
        }
      }, 1000)
    }
  }

  updatePrizes(prizes: { name: string }[]): void {
    this.prizes = prizes;
  }

  resetWinner(): void {
    this.winner = '';
    this.winningPrize = '';
    this.winningDepartment = '';
  }

  addParticipant(name: string, department: string): void {
    if (name.trim() && department.trim()) {
      this.participants.push({ name, department });
      this._participanteServices.saveData('participants', this.participants)
    }
  }

  deleteParticipant(participant: { name: string, department: string }) {
    const index = this.participants.indexOf(participant);
    if (index !== -1) {
      this.participants.splice(index, 1);
      this._participanteServices.saveData('participants', this.participants);
    }
  }
}
