import { Component } from '@angular/core';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component {

  cantidad: number = 0;
  precio: number = 0;
  resultado: number = 0;

  calcularDescuento() {
    const valorAPagar = this.cantidad * this.precio;

    if (valorAPagar > 200) {
      // Aplicar descuento del 20%
      this.resultado = valorAPagar * 0.8;
    } else {
      this.resultado = valorAPagar;
    }
  }

}
