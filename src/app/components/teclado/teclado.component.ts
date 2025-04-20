import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.scss'],
  standalone: false,
})
export class TecladoComponent {
  @Output() tecla = new EventEmitter<string>();
  botoes = [
    ['0', '1', '2', '*'],
    ['3', '4', '5', '/'],
    ['6', '7', '8', '-'],
    ['9', 'CE', '=', '+'],
  ];
  clicar(valor: string) {
    this.tecla.emit(valor);
  }
}
