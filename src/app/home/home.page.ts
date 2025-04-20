import { Component } from '@angular/core';
import { ValidadorService } from '../services/validador.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  expressao = '';
  historico: { expressao: string; resultado: string }[] = [];

  constructor(private validador: ValidadorService) {}

  processarTecla(tecla: string) {
    if (tecla === 'CE') {
      this.expressao = this.expressao.slice(0, -1);
    } else if (tecla === '=') {
      // Substitui todos os números seguidos de % por (número / 100)
      const expressaoComPorcentagem = this.expressao.replace(/(\d+(\.\d+)?)%/g, '($1/100)');

      if (this.validador.validar(expressaoComPorcentagem)) {
        try {
          const resultado = eval(expressaoComPorcentagem).toString();
          this.historico.push({
            expressao: this.expressao,
            resultado: resultado
          });
          this.expressao = resultado;
        } catch (e) {
          this.expressao = 'Erro!';
        }
      } else {
        this.expressao = 'Erro!';
      }
    } else {
      this.expressao += tecla;
    }
  }

  limparHistorico() {
    this.historico = [];
  }
}
