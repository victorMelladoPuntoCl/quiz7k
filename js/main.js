import {captureSubmitEvents} from './quiz.js';
import {vkQuizappState } from './vkQuizappState.js';

const swiper = new Swiper('.swiper', {

  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  
  // Navigation arrows
  /*
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  */
  
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  });
  

//Ejemplos de uso:
// Update the app state
vkQuizappState.currentQuestion = 2;
vkQuizappState.correctAnswers++;
vkQuizappState.answersState[1] = 1; // Mark the second question as answered correctly

console.log(vkQuizappState.currentQuestion); // Prints 2
console.log(vkQuizappState.correctAnswers); // Prints 1
console.log(vkQuizappState.answersState); // Prints [0, 1, 0, 0, 0]

captureSubmitEvents();
