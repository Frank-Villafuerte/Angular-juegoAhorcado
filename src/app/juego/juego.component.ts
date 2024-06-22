import { Component } from '@angular/core';
import {PalabrasService} from '../palabras.service'
@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent {
  constructor(public palabrasService: PalabrasService) { }

  ngOnInit(): void {
  }

  usarLetra(letter: string) {
    this.palabrasService.usarLetra(letter);
  }

  nuevoJuego() {
    this.palabrasService.nuevoJuego();
  }

}
