import {Injectable} from '@angular/core';
import {Usuarios} from './usuariosmock';

@Injectable()
export class UsuariosService{
    getUsuarios(){
        return Usuarios;
    }

    getUsuario(id:number){
        let usuario = Usuarios.find(x => x.id == id);
        return usuario;
    }
}
