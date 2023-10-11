import { quizAnswers } from './quizdata.js';

const evalAnswer = (questionId, answer) => {
  const result = (quizAnswers[questionId] == answer);
  return result;
};


function captureSubmitEvents() {
    const forms = document.querySelectorAll('form'); // Selecciona todos los formularios de la página
  
    forms.forEach((form) => {
      form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe y se recargue la página
  
        const formData = new FormData(form); // Obtiene los datos del formulario
        const data = Object.fromEntries(formData.entries()); // Convierte los datos en un objeto
  
        console.log('Datos del formulario:', data); // Muestra los datos en la consola
      });
    });
  }
  
export { evalAnswer, captureSubmitEvents};


/* estado */

const appState = {
    currentQuestion: 1,
    correctAnswers: 0,
    answersState: [0, 0, 0, 0, 0], // Array to store the state of answers
  };
  
  // Update the app state
  appState.currentQuestion = 2;
  appState.correctAnswers++;
  appState.answersState[1] = 1; // Mark the second question as answered correctly
  
  console.log(appState.currentQuestion); // Prints 2
  console.log(appState.correctAnswers); // Prints 1
  console.log(appState.answersState); // Prints [0, 1, 0, 0, 0]