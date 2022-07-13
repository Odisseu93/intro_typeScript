export class Negociacao {

  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}


  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
      const data = new Date(this._data.getTime());
      return data; // as alterações agora, serão somente na cópia da data e não na data em si.
  }

}