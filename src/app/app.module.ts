import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { InitComponent } from './init/init.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';


import {StoreModule} from '@ngrx/store';
import {ContadorAcciones} from './services/counter';

import {RouterModule, Routes} from '@angular/router';
import {ROUTER_PRINCIPAL} from './commons/router';
import { DetalleComponent } from './detalle/detalle.component';

import {UsuariosService} from './services/usuarios.service';
@NgModule({
  declarations: [
    InitComponent,
    AppComponent,
    PageNotFoundComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore({contadorSTORE:ContadorAcciones}),
    RouterModule.forRoot(ROUTER_PRINCIPAL)
  ],
  providers: [UsuariosService],
  bootstrap: [InitComponent]
})
export class AppModule { }
