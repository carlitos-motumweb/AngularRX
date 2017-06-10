import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
// import 'rxjs/add/operator/switchMap';
// import {Observable} from 'rxjs/Observable';
import {UsuariosService} from '../services/usuarios.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
    id:number;
    usuarioSeleccionado:any;
    errorMessage: String;

  constructor(
      private usService: UsuariosService,
      private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
      this.id =  +this.route.snapshot.params['id'];

      // Invocando servicio normal
      this.usuarioSeleccionado = this.usService.getUsuario(this.id);

      // invocando servico MONGO
      this.usService.getUsuarioMongo(this.id).then(
          usuario => this.usuarioSeleccionado = usuario,
          error => this.errorMessage = <any>error
      )
  }

}
