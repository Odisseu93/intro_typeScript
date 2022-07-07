import { Negociacao } from "../models/negociacao.js"; //tem que colocal o ".js" mesmo com o autoImport
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
    }
    criaNegociacao() {
        const exp = /-/g; // Regular expressions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
        const date = new Date(this.inputData.value.replace(exp, ',')); // quando a exp. regular encontrar o valor, irá substituir por ','
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
}
