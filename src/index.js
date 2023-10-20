import { getState, setState,registerStateListener } from "./js/state.js";
import {myQuestions} from "./js/quizdata.js"; //contenido del cuestionario.
import{nextSlide,prevSlide,updateSlide} from "./js/slideControl.js";
import { buildQuiz } from "./js/buildQuiz.js";
import {buildProgressTracking, updateProgressWithResults} from "./js/progressTracking.js";
import './css/styles.css';

// Inicialización

let currentPosition = getState().currentPosition;;

//Slider y su navegación :D
const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const continueButton = document.getElementById('continueButton');

//reset 
//quitar todas las clases 'correct', 'incorrect' e 'incorrect-unchecked' que pueda haber en cualquier elemento del quiz
//obtener todos los elementos li de la página

function resetQuiz() {
    let liElements = document.querySelectorAll('li');
    liElements.forEach(liElement => {
        liElement.classList.remove('correct');
        liElement.classList.remove('incorrect');
        liElement.classList.remove('incorrect-unchecked');
    }

    );

}


console.log("Documento cargado");
    
//Navegación

//Botón continuar, continúa:
    continueButton.addEventListener('click', function() {
        currentPosition = nextSlide(myQuestions, currentPosition, slider);
        document.querySelector('.feedback').classList.add('hidden');
        document.querySelector('.question-'+currentPosition).classList.add('active');
        console.log("nextSlide terminado. currentPosition : "+currentPosition);
        let state = getState();
        state.currentPosition = currentPosition;
        setState(state);



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
    buildProgressTracking(myQuestions); // construir la barra de progreso.
    registerStateListener(updateProgressWithResults);



