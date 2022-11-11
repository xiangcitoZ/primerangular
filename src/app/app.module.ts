import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimerComponent } from 'src/components/primercomponent/primer.component';
import { HooksAngular } from 'src/components/hooksangular/hooksangular.component';
import { DeportesComponent } from 'src/components/deportes/deportes.component';

import { FormsModule } from '@angular/forms';
import { FormularioBindingComponent } from 'src/components/formulariobinding/formulariobinding.component';
import { SumarNumerosComponent } from 'src/components/sumarnumeros/sumarnumeros.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngular,
    DeportesComponent,
    FormularioBindingComponent,
    SumarNumerosComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
