import {myQuestions} from "/js/quizdata.js"; //contenido del cuestionario.
import{nextSlide,prevSlide,updateSlide} from "/js/slideControl.js";
import{tp_multipleChoice} from "/js/quizTemplates.js";

let currentPosition =0;
let userAnswers = [];

//objetos para manipular el DOM
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

//Constructor de preguntas
//

function buildQuestion(myQuestions) {
    
    //recorrer el objeto
    myQuestions.forEach(function(question,index){

        let newSlide = document.createElement("div");
        newSlide.className = 'slide '+'question-'+index;
        newSlide.setAttribute('data-slide', index);

        newSlide.innerHTML = tp_multipleChoice({ question, index });

        console.log (question);
        console.log (index);
        slider.appendChild(newSlide);

    }); //termina forEach
}

buildQuestion(myQuestions);
console.log("Iniciado. currentPosition : "+currentPosition);

// navegar

nextButton.addEventListener('click', function() {
    currentPosition = nextSlide(myQuestions, currentPosition, slider);
    console.log("nextSlide terminado. currentPosition : "+currentPosition);
});

prevButton.addEventListener('click', function() {
    currentPosition = prevSlide(myQuestions, currentPosition, slider);
    console.log("nextSlide terminado. currentPosition : "+ currentPosition);
});