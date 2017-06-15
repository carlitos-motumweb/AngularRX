import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Fase} from '../model/Fase';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FaseService {

    constructor(private http: Http) {}

    // getFases(): Promise<any[]> {
    //     return this.http.get('http://localhost:8080/Prueba/resources/fases')
    //                 .toPromise()
    //                 .then(this.extractData)
    //                 .catch(this.handlerError);
    // }

    getFases() {
        return this.http.get('http://localhost:8080/Prueba/resources/fases')
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handlerError);
    }


    private extractData(res: Response) {
        console.log("ERRORRRRRRRRRRRRRRRRR-------");
      let body = res.json();
      console.log("body: ", body);
      if(body == null){
          return {};
      }else{
          return body;
      }
    //   if (body.status == 200) {
    //     return body.result;
    //   } else {
    //     return {};
    //   }

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
