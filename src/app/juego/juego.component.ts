import { Component } from '@angular/core';
import {PalabrasService} from '../palabras.service'
import { TecladoComponent } from '../teclado/teclado.component';
@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [TecladoComponent],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent {
  constructor(public palabrasService: PalabrasService) { }

  usarLetra(letra: string) {
    console.log(`Tecla presionada: ${letra}`);
    this.palabrasService.usarLetra(letra);
  }

  nuevoJuego() {
    this.palabrasService.nuevoJuego();
  }
}
