import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ValidadorService {
  validar(expressao: string): boolean {
    try {
      const resultado = eval(expressao);
      return isFinite(resultado); // evita divisão por zero e NaN
    } catch {
      return false;
    }
  }
}
