import { setState, getState, subscribe } from './state.js';

const updateScore = (state) => {
  const puntajeElement = document.getElementById('puntaje');
  puntajeElement.textContent = state.score;
};

subscribe(updateScore); //pasa como función para suscribirse.

let boton = document.getElementById('btn');
boton.addEventListener('click', () => {
    setState({ score: getState().score + 1 });
});
