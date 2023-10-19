import { getState, setState, subscribe } from "/js/state.js";
import {myQuestions} from "/js/quizdata.js"; //contenido del cuestionario.
import{nextSlide,prevSlide,updateSlide} from "/js/slideControl.js";
import { buildQuiz } from "./buildQuiz.js";

// Inicialización

let currentPosition = getState().currentPosition;;

//Slider y su navegación :D
const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const continueButton = document.getElementById('continueButton');

console.log("Documento cargado");
    
//Navegación

//Botón continuar, continúa:
    continueButton.addEventListener('click', function() {
        currentPosition = nextSlide(myQuestions, currentPosition, slider);
        document.querySelector('.feedback').classList.add('hidden');
        document.querySelector('.question-'+currentPosition).classList.add('active');
        console.log("nextSlide terminado. currentPosition : "+currentPosition);
    });

    //Estos son de debug, hay que borrarlos.
    nextButton.addEventListener('click', function() {
        currentPosition = nextSlide(myQuestions, currentPosition, slider);
        console.log("nextSlide terminado. currentPosition : "+currentPosition);
    });

    prevButton.addEventListener('click', function() {
        currentPosition = prevSlide(myQuestions, currentPosition, slider);
        console.log("nextSlide terminado. currentPosition : "+ currentPosition);
    });


    //Inicializar

    buildQuiz(myQuestions, slider); //y eso, comenzar a construir todo.


