import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-teclado',
  standalone: true,
  imports: [],
  templateUrl: './teclado.component.html',
  styleUrl: './teclado.component.css'
})
export class TecladoComponent {
  @Output() letraClick = new EventEmitter<string>();

  letras: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  presionarTecla(letra: string) {
    this.letraClick.emit(letra);
  }
}
