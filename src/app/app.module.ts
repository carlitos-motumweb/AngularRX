import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { InitComponent } from './init/init.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { UpdateComponent } from './update/update.component';


import {StoreModule} from '@ngrx/store';
import {ContadorAcciones} from './services/counter';

import {RouterModule, Routes} from '@angular/router';
import {ROUTER_PRINCIPAL} from './commons/router';
import { DetalleComponent } from './detalle/detalle.component';

import {UsuariosService} from './services/usuarios.service';
import {FaseService} from './services/fase.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import 'hammerjs';

import {ButtonModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    InitComponent,
    AppComponent,
    PageNotFoundComponent,
    DetalleComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore({contadorSTORE:ContadorAcciones}),
    RouterModule.forRoot(ROUTER_PRINCIPAL),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [UsuariosService, FaseService],
  bootstrap: [InitComponent]
})
export class AppModule { }
