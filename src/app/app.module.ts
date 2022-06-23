import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { PaisesComponent } from './components/paises/paises.component';
import { PaisComponent } from './components/pais/pais.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EscudoComponent } from './modals/escudo/escudo.component';

@NgModule({
  declarations: [
    AppComponent,
    PaisesComponent,
    PaisComponent,
    EscudoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
