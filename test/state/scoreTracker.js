import { subscribe } from './state.js';

const updateScore = (state) => {
  console.log(`Puntaje actualizado: ${state.score}`);
  // Aquí iría la lógica para actualizar el marcador de puntaje
};

subscribe(updateScore);