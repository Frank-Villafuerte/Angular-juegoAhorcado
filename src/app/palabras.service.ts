import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService{
  private palabras: string[] = ['angular', 'javascript', 'typescript', 'component', 'service'];
  private palabraActual: string = '';
  private letrasUsadas: string[] = [];
  private letrasIncorrectas: number = 0;
  private intentosMaximos: number = 6;

  constructor() {
    this.nuevoJuego();
  }

  nuevoJuego() {
    this.palabraActual = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    this.letrasUsadas = [];
    this.letrasIncorrectas = 0;
  }
  getPalabraActual(){
    return this.palabraActual;
  }
  usarLetra(letra: string) {
    if (!this.letrasUsadas.includes(letra)) {
      this.letrasUsadas.push(letra);
      if (!this.palabraActual.includes(letra)) {
        this.letrasIncorrectas++;
      }
    }
  }

  mostrarLetra(): string {
    return this.palabraActual.split('').map(letra => this.letrasUsadas.includes(letra) ? letra : '_').join(' ');
  }

  getLetrasIncorrectas(): number {
    return this.letrasIncorrectas;
  }

  isGameOver(): boolean {
    return this.letrasIncorrectas >= this.intentosMaximos || this.palabraEncontrada();
  }

  palabraEncontrada(): boolean {
    return this.palabraActual.split('').every(letra => this.letrasUsadas.includes(letra));
  }
}

