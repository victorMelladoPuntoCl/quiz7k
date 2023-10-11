import { quizAnswers } from './quizdata.js';
import { vkQuizappState } from './vkQuizappState.js';

const evalAnswer = (questionId, answer) => {
  const result = (quizAnswers[questionId] == answer);
  return result;
};

function captureSubmitEvents() {

  }


  export { evalAnswer, captureSubmitEvents};