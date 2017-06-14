import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './signup.interface';
import {Store} from '@ngrx/store';
import {INCREMENTAR_ACTION, DECREMENTAR_ACTION, RESETEAR_ACTION} from './services/counter';
import {Observable} from 'rxjs/Observable';
import {UsuariosService} from './services/usuarios.service';
import {Router} from '@angular/router';
import {Car} from './model/auto';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  listaAutos: Car[];
  user: FormGroup;
  listaUsuarios: any;
  miContador: Observable<number>;

  listaUsuariosMongo: any;
  errorServicioMongo: any;

  constructor(
    private router: Router,
    private usService: UsuariosService,
    private fb: FormBuilder,
    private store: Store<number>,
    private zonaEspecial: NgZone) {
    this.miContador = store.select('contadorSTORE');
    this.listaUsuarios = usService.getUsuarios();
    this.obtenerUsuariosMongo();
  }

  ngOnInit() {
    //this.listaAutos.push({'numSerie':'abc','year':'1977','brand':'vw','color':'azul'});
    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      account: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required]
      })
    });
  }
  onSubmit() {
    console.log(this.user.value);
    console.log(this.user.valid);
    console.log(this.user.get('account').value);
  }

  incrementar() {
    this.store.dispatch({ type: INCREMENTAR_ACTION });
  }
  decrementar() {
    this.store.dispatch({ type: DECREMENTAR_ACTION });
  }
  resetear() {
    this.store.dispatch({ type: RESETEAR_ACTION });
  }



  progreso: number = 0;
  etiquetaProgreso: string;

  progresoDentroDeNGZone() {
    this.etiquetaProgreso = 'ejecutando DENTRO de NGZone';
    this.progreso = 0;
    this.incrementarProgreso(() => { });
  }

  incrementarProgreso(doneCallBack: () => void) {
    this.progreso += 1;
    console.log("Progreso: ", this.progreso);
    if (this.progreso < 100) {
      window.setTimeout(() => { this.incrementarProgreso(doneCallBack) }, 20);
    } else {
      this.etiquetaProgreso = 'Ejecución dentro de NGZone concluida';
      console.log(this.etiquetaProgreso);
      return;
    }
  }

  progresoFueraDeNGZone() {
    this.etiquetaProgreso = 'ejecutando FUERA de NGZone';
    this.progreso = 0;
    this.zonaEspecial.runOutsideAngular(() => { this.incrementarProgreso(() => { this.zonaEspecial.run(() => { this.etiquetaProgreso = 'Ejecución fuera de NGZone concluida'; }) }) });
  }

  navegarHaciaDetalleUsuario(id: number): void {
    this.router.navigate(['/detalle', id]);
  }

  verUsuarioMongo(id: number): void {
    this.router.navigate(['detalle', id]);
  }

  updateUsuarioMongo(id: number): void {
    this.router.navigate(['update', id]);
  }

  removerUsuarioMongo(id): void {
    this.usService.removeUsuarioMongo(id).then(
      ok => this.checking(ok),
      error => console.log(<any>error)
    );
  }

  checking(ok: any) {
    if (ok.n == 1) {
      alert("El usuario se ha eliminado correctamente");
    }
    this.obtenerUsuariosMongo();
  }

  obtenerUsuariosMongo(): void {
    this.usService.getUsuariosMongo()
      .then(
      usuario => this.listaUsuariosMongo = usuario,
      error => this.errorServicioMongo = <any>error
      );
  }

}
