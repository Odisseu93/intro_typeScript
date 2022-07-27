export abstract class View<T>{ //classe abstrata

  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  update(model: T): void {
    const template = this.template(model);
    console.log(template);
    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string; // método abstrato
}