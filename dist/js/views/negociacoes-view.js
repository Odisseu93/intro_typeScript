export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template() {
        return `
      <table class="table table-hover table-bordered">
        <thead>
            <th>
                DATA
            </th>
            <th>
                QUANTIDADE
            </th>
            <th>
                VALOR
            </th>
        </thead>
        <tbody>
        </tbody>
      </table>
    `;
    }
    update() {
        this.elemento.innerHTML = this.template();
    }
}
