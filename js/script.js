import {myQuestions} from "/js/quizdata.js"; //contenido del cuestionario.
import{nextSlide,prevSlide,updateSlide} from "/js/slideControl.js";
import{tp_multipleChoice} from "/js/quizTemplates.js";
import { checkAnswers } from "/js/checkAnswers.js";



/**
 * Construye y muestra las preguntas en forma de slides en el documento HTML.
 * @param {Array} myQuestions - Un array de objetos que representan las preguntas y sus opciones de respuesta.
 */

function buildQuestion(myQuestions) {
    
    //recorrer el objeto
    myQuestions.forEach(function(question,index){

        let newSlide = document.createElement("div"); // crear slide
        newSlide.className = 'slide '+'question-'+index; // añadirle un className 'slide question+N'
        newSlide.setAttribute('data-slide', index); // añadirle además un data-slide = N (estamos un poco redundantes no?)
        newSlide.innerHTML = tp_multipleChoice({ question, index }); // añadirle el template de la pregunta
        slider.appendChild(newSlide); // añadirlo al slider


        document.querySelectorAll('label').forEach(function(label) { //recorrer todos los labels
            label.addEventListener('click', function() {
              var input = this.querySelector('input');
              input.checked = !input.checked;
            });
          });

    }); //termina forEach

        // Agrega un controlador de eventos a todos los formularios generados
        const forms = document.querySelectorAll('.question-options');
        forms.forEach(form => {
            form.addEventListener('submit', function(event) {
                event.preventDefault(); //bloquea el refresco de página.
                const userAnswers = Array.from(form.querySelectorAll('input[name="answers"]:checked')).map(input => input.value); //genera un Array con las respuestas en estado checked.
                checkAnswers(event, myQuestions, userAnswers, currentPosition); //llama a la función que comprueba las respuestas.
            });
        });
}




// Inicialización

let currentPosition =0; // Inicializa la posición actual

//let userAnswers = []; // Inicializa el array de respuestas

//objetos para manipular el DOM
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const continueButton = document.getElementById('continueButton');

    console.log("Documento cargado");
    
    //Navegación
    //agregar eventos a los botones
    continueButton.addEventListener('click', function() {
        currentPosition = nextSlide(slides, currentPosition, slider);
        document.querySelector('.feedback').classList.add('hidden');
        document.querySelector('.question-'+currentPosition).classList.add('active');
        console.log("nextSlide terminado. currentPosition : "+currentPosition);
    });

    
    nextButton.addEventListener('click', function() {
        currentPosition = nextSlide(slides, currentPosition, slider);
        console.log("nextSlide terminado. currentPosition : "+currentPosition);
    });

    prevButton.addEventListener('click', function() {
        currentPosition = prevSlide(slides, currentPosition, slider);
        console.log("nextSlide terminado. currentPosition : "+ currentPosition);
    });


    //Inicializar

    buildQuestion(myQuestions);



console.log("Iniciado. currentPosition : "+currentPosition);


