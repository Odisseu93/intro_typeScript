export class Negociacoes {
    constructor() {
        this.negociacoes = []; // maneira não simplificada = Array<Negociacao>
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
