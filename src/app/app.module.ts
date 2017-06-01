import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {StoreModule} from '@ngrx/store';
import {ContadorAcciones} from './services/counter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore({contadorSTORE:ContadorAcciones})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
