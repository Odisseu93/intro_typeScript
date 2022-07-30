export class Negociacao {

  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) { }


  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data; // as alterações agora, serão somente na cópia da data e não na data em si.
  }

  /*
    método estático, pode ser chamado sem precisar instanciar a classe (const negogociacao = new Negociacao(null, 0, 0).criaDe())
  */
  public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
    const exp = /-/g; 
    const date = new Date(dataString.replace(exp, ',')); 
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }

}
