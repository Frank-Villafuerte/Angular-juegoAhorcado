import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService{
  private cortas: string[]= [
    "CASA",
    "PERRO",
    "GATO",
    "SOL",
    "ROJO",
    "AZUL",
    "VINO",
    "LUZ",
    "FLOR",
    "MESA",
    "TREN",
    "PIEL",
    "PESO",
    "HOJA",
    "COCO",
    "RANA",
    "PATO",
    "LUNA",
    "BOLA",
    "CIELO"
  ];
  private medianas: string[]= [
    "TELEVISOR",
    "COMPUTADORA",
    "ELEFANTE",
    "CABALLO",
    "GUITARRA",
    "CERVEZA",
    "COCHE",
    "CASCADA",
    "CIGARRILLO",
    "PANTALLA",
    "CARTERA",
    "CINTURON",
    "CUBIERTO",
    "CABINA",
    "CANGURO",
    "CESPED",
    "CAMARA",
    "CELULA",
    "CIRCULO",
    "CODIGO"
  ];
  private largas: string[]= [
    "ELECTRICIDAD",
    "EXTRATERRESTRE",
    "INDEPENDENCIA",
    "CONSTITUCION",
    "FOTOGRAFIA",
    "DETERMINACION",
    "INVESTIGACION",
    "CONGRATULACIONES",
    "INCONSTITUCIONALIDAD",
    "ANTICONSTITUCIONALIDAD",
    "SUPERCALIFRAGILISTICOESPIALIDOSO",
    "HIPERCONECTIVIDAD",
    "INCOMPRENSIBILIDAD",
    "INCONMENSURABILIDAD",
    "INCONMENSURABLEMENTE",
    "INCONMENSURABLE",
    "INCONSTITUCIONAL",
    "INCONMENSURADO",
    "INCONMENSURABLES",
    "INCONMENSURABLEMENTES"
  ];
  private palabras: string[] = this.medianas;
  
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
    console.log(this.palabraActual);
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
    this.mostrarLetra();
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

