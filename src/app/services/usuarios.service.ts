import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Usuarios} from './usuariosmock';

@Injectable()
export class UsuariosService {
  urlBackend = 'http://localhost:3000/';

  constructor(private http: Http) {

  }

  getUsuariosMongo(): Promise<any[]> {
    return this.http.get(this.urlBackend + 'usuarios').toPromise().then(this.extractData).catch(this.handlerError);
  }

  getUsuarioMongo(id: number): Promise<any[]> {
    return this.http.post(this.urlBackend + 'usuario', { "id": id }).toPromise().then(this.extractData).catch(this.handlerError);
  }

  updateUsuarioMongo(id:number, nombre:string, apellidos:string ):Promise<any>{
    return this.http.post(this.urlBackend + 'usuarioUpdate',{
        "id":id,
        "nombre":nombre,
        "apellidos":apellidos
    }).toPromise().then(this.extractData).catch(this.handlerError);
}

removeUsuarioMongo(id:number):Promise<any>{
  return this.http.post(this.urlBackend + 'usuarioDelete',{
      "id":id
  }).toPromise().then(this.extractData).catch(this.handlerError);
}

  getUsuarios() {
    return Usuarios;
  }

  getUsuario(id: number) {
    let usuario = Usuarios.find(x => x.id == id);
    return usuario;
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log("body: ", body);
    if (body.status == 200) {
      return body.result;
    } else {
      return {};
    }

  }

  private handlerError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const er = body.error || JSON.stringify(body);
      errMsg = `${error.status} -- ${error.statusText || ''} ${error}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(errMsg);
  }



}
