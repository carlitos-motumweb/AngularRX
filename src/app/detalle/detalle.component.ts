import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {UsuariosService} from '../services/usuarios.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
    id:number;
    usuarioSeleccionado:any;

  constructor(
      private usService: UsuariosService,
      private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
      this.id =  +this.route.snapshot.params['id'];
      this.usuarioSeleccionado = this.usService.getUsuario(this.id);
  }

}
