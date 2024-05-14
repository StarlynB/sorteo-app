import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SorteoComponent } from './pages/components/sorteo/sorteo.component';


import { PrizesComponent } from './pages/components/prizes/prizes.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaticipantesService } from './pages/services/paticipantes.service';


@NgModule({
  declarations: [
    AppComponent,
    SorteoComponent,
    PrizesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
  providers: [PrizesComponent, PaticipantesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
