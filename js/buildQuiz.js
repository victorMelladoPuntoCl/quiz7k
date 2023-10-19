import { getState, setState, registerStateListener } from "/js/state.js";
import{tp_feedbackSlide,tp_multipleChoice} from "/js/quizTemplates.js";
import { checkAnswers } from "/js/checkAnswers.js";

/**
 * Construye y muestra las preguntas en forma de slides en el documento HTML.
 * @param {Array} myQuestions - Un array de objetos que representan las preguntas y sus opciones de respuesta.
 * @param {HTMLElement} container - Un elemento del DOM que contiene el slider.
 */

function buildQuiz(myQuestions, slider) {
    
    console.log("myQuestions.length = "+myQuestions.length);

    //recorrer el objeto
    myQuestions.forEach(function(question,index){

        let newSlide = document.createElement("div"); // crear slide
        newSlide.className = 'slide '+'question-'+index; // añadirle un className 'slide question+N'
        newSlide.setAttribute('data-slide', index); // añadirle además un data-slide = N (estamos un poco redundantes no?)
        
        switch(question.questionType){
            case ("multiple-choice"):
                newSlide.innerHTML = tp_multipleChoice({ question, index }); // añadirle el template de la pregunta
                break;
                
            case ("single-choice"):
                newSlide.innerHTML = tp_multipleChoice({ question, index }); // añadirle el template de la pregunta
                break;

            case ("feedback-slide"):
                newSlide.innerHTML = tp_feedbackSlide({ question, index }); // añadirle el template de la pregunta
                break;
            
            default:
                console.log("Error: no se reconoce el tipo de pregunta.");
                break;
        }

        slider.appendChild(newSlide); // añadirlo al slider


    }); //termina forEach


        // Agrega un controlador de eventos a todos los formularios generados
        const forms = document.querySelectorAll('.question-options');
        
        forms.forEach((form, key) => {
            form.addEventListener('submit', function(event) { // Listener al submit del form (cada pregunta es un form)
                event.preventDefault(); // Bloquea el refresco de página.
                const userAnswers = Array.from(form.querySelectorAll('input[name="answers"]:checked')).map(input => input.value); // Genera un Array con las respuestas en estado checked.
                checkAnswers(event, myQuestions, userAnswers, key); // Llama a la función que comprueba las respuestas.
            });
        });
}

function registerBuildQuizListener(listener) {
    registerStateListener(listener); // Aquí simplemente reutilizamos la función de registro del estado
}

export{buildQuiz, registerBuildQuizListener};