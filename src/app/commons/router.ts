import {Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {PageNotFoundComponent} from '../pageNotFound/pageNotFound.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { UpdateComponent } from '../update/update.component';

export const ROUTER_PRINCIPAL : Routes = [
    {path:'',   component:AppComponent},
    {path:'detalle/:id', component: DetalleComponent },
    {path:'update/:id', component: UpdateComponent },
    {path:'**', component:PageNotFoundComponent}
];
