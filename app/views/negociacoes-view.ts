import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView  extends View<Negociacoes>{

  protected template(model: Negociacoes): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
        </thead>
        <tbody>
            ${model.lista().map(negociacao =>{
              return `
              <tr>
                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
              </tr>
              `
            }).join('') /* https://www.w3schools.com/jsref/jsref_join.asp */ } 
        </tbody>
      </table>
    `;
  }
}