import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        return `
      <table class="table table-hover table-bordered">
        <thead>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
        </thead>
        <tbody>
            ${model.lista().map(negociacao => {
            return `
              <tr>
                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
              </tr>
              `;
        }).join('') /* https://www.w3schools.com/jsref/jsref_join.asp */} 
        </tbody>
      </table>
    `;
    }
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
