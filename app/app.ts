import { NegociacaoController } from "./controllers/negociacao-crontroller.js";



const controller = new NegociacaoController();
const form = document.querySelector('.form'); // Event Bubbling https://riptutorial.com/dom/example/1344/event-bubbling-and-capturing
form.addEventListener('submit', event => {
  event.preventDefault();
  controller.adiciona();
});



