import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SorteoComponent } from './pages/components/sorteo/sorteo.component';
import { HttpClientModule } from '@angular/common/http';
import { IconModule } from '@visurel/iconify-angular';
import { PrizesComponent } from './pages/components/prizes/prizes.component';
import { FormsModule } from '@angular/forms';

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
    HttpClientModule,
    FormsModule
  ],
  providers: [PrizesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
