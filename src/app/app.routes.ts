import { Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { JuegoComponent} from './juego/juego.component';
import { TecladoComponent} from './teclado/teclado.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'juego', component: JuegoComponent },  
    { path: 'teclado', component: TecladoComponent } 
];
