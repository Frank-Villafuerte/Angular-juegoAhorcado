import { Component, EventEmitter, Output } from '@angular/core';
import { NgForOf} from '@angular/common'; 

@Component({
  selector: 'app-teclado',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './teclado.component.html',
  styleUrl: './teclado.component.css'
})
export class TecladoComponent {
  @Output() 
  letraClick = new EventEmitter<string>();

  letras1: string[] = 'QWERTYUIOP'.split("");
  letras2: string[] = 'ASDFGHJKL'.split("");
  letras3: string[] = 'ZXCVBNM'.split("");
  

  presionarTecla(letra: string) {
    var imagen = document.createElement("img");
    imagen.src="../assets/x.png"
    imagen.alt="Boton ya utilizado"
    this.letraClick.emit(letra);
  }
 
}
