import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './signup.interface';
import {Store} from '@ngrx/store';
import {INCREMENTAR_ACTION, DECREMENTAR_ACTION, RESETEAR_ACTION} from './services/counter';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user: FormGroup;

  miContador: Observable<number>;

  constructor(
        private fb: FormBuilder,
        private store: Store<number> ) {
            this.miContador = store.select('contadorSTORE');
        }

  ngOnInit() {
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

  incrementar(){
      this.store.dispatch({type:INCREMENTAR_ACTION});
  }
  decrementar(){
      this.store.dispatch({type:DECREMENTAR_ACTION});
  }
  resetear(){
      this.store.dispatch({type:RESETEAR_ACTION});
  }
}
