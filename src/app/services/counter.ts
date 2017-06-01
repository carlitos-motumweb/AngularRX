import {Action} from '@ngrx/store';

export const INCREMENTAR_ACTION = 'INCREMENTAR';
export const DECREMENTAR_ACTION = 'DECREMENTAR';
export const RESETEAR_ACTION = 'RESETEAR';

export function ContadorAcciones(estadoContador: number = 0, accionPorEjecutar: Action) {
  switch (accionPorEjecutar.type) {
    case INCREMENTAR_ACTION:
      return estadoContador + 1;
    case DECREMENTAR_ACTION:
      return estadoContador - 1;
    case RESETEAR_ACTION:
      return 0;
    default:
      return estadoContador;
  }
}
