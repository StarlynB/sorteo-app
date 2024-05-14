import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


Injectable({
  providedIn: 'root',
})

export class PaticipantesService {

  participantsChanged = new Subject<{ name: string, department: string }[]>();
  constructor() { }

  //save data
  saveData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  //obtener data
  getData(key: string) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  removeData(key: string) {
    localStorage.removeItem(key);
  }

  // Update participants
  updateParticipants(participants: { name: string, department: string }[]): void {
    this.participantsChanged.next(participants.slice());
  }
}
