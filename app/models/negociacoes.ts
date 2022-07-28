import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = []; // maneira não simplificada = Array<Negociacao>

  public adiciona(negociacao: Negociacao) {
      this.negociacoes.push(negociacao);
  }

  public lista(): readonly Negociacao[] { // ReadonlyArray<Negociacao>
      return this.negociacoes;
  }
}





