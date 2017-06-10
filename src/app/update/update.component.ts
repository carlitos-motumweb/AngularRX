import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {UsuariosService} from '../services/usuarios.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'update-component',
    templateUrl: 'update.component.html'
})
export class UpdateComponent{
    usuario:any={
        id:0,
        nombre:'',
        apellidos:''
    }

    myForm:FormGroup;

    constructor(
        private router:Router,
        private route: ActivatedRoute,
        private service: UsuariosService,
        private fb: FormBuilder
    ){
        this.myForm = this.fb.group({
            'id':[this.usuario.id],
            'nombre':[this.usuario.nombre],
            'apellidos':[this.usuario.apellidos]
        });
    }

    ngOnInit(){
        this.usuario.id = +this.route.snapshot.params['id'];
        this.service.getUsuarioMongo(this.usuario.id).then(
            usuario => this.start(usuario),
            error => console.log(<any>error)
     )
    }

    start(usuario:any){
        this.usuario = usuario;
        this.myForm =  this.fb.group({
            'id':[this.usuario.id],
            'nombre':[this.usuario.nombre],
            'apellidos':[this.usuario.apellidos]
        });
    }

    onSubmit(values:any){
        this.service.updateUsuarioMongo(
            this.usuario.id,
            values.nombre,
            values.apellidos
        ).then(
            ok => this.checking(ok),
            error => console.log(<any>error))
    }

    checking(ok:any){
        if(ok.nModified == 1){
            alert("los datos se han modificado correctamente");
            this.router.navigate(['/detalle', this.usuario.id]);
        }
    }
}
