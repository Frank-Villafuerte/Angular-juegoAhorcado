import { Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { JuegoComponent} from './juego/juego.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'juego', component: JuegoComponent }    
];
