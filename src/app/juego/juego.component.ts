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
    this.palabrasService.usarLetra(letra);

    let img=document.getElementById("imgn") as HTMLElement;
    if(this.palabrasService.getLetrasIncorrectas()==1){
      img.style.backgroundImage="url('assets/imagenes/cabeza.png')";
    }
    if(this.palabrasService.getLetrasIncorrectas()==2){
      img.style.backgroundImage="url('assets/imagenes/torso.png')";
    }
    if(this.palabrasService.getLetrasIncorrectas()==3){
      img.style.backgroundImage="url('assets/imagenes/1b.png')";
    }
    if(this.palabrasService.getLetrasIncorrectas()==4){
      img.style.backgroundImage="url('assets/imagenes/2b.png')";
    }
    if(this.palabrasService.getLetrasIncorrectas()==5){
      img.style.backgroundImage="url('assets/imagenes/1p.png')";
    }
    if(this.palabrasService.getLetrasIncorrectas()==6){
      img.style.backgroundImage="url('assets/imagenes/go.png')";
    }
    
  }

  nuevoJuego() {
    this.palabrasService.nuevoJuego();
  }
}
