import { Component } from '@angular/core';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component {
  montoPrestamo: number = 0;
  cuotas: number = 0;
  montoCuota: number = 0;

  calcularCobro() {
    if (this.montoPrestamo > 5000) {
      this.cuotas = 3;
    } else if (this.montoPrestamo < 1000) {
      this.cuotas = 1;
    } else if (this.montoPrestamo >= 2000 && this.montoPrestamo <= 3000) {
      this.cuotas = 2;
    } else {
      this.cuotas = 5;
    }

    const tasaInteres = this.montoPrestamo < 4000 ? 0.12 : 0.1;
    const totalDeuda = this.montoPrestamo * (1 + tasaInteres);

   
    this.montoCuota = totalDeuda / this.cuotas;
  }
}
