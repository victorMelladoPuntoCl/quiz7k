import { getState, setState, registerStateListener } from "/js/state.js";
import { nextSlide, prevSlide, updateSlide } from "/js/slideControl.js";
import { showModal } from "/js/modal.js";

//Función que recibe un array de respuestas, un array de respuestas correctas y devuelve un objeto con las respuestas correctas, 
//incorrectas y el resultado de la pregunta.

function checkAnswers(event, myQuestions, userAnswers, currentPosition) {

    let form = event.target;
    let correct = [];
    let incorrect = [];
    let questionResult = '';



    // Marcar los botones de pregunta según corresponda (correcto/incorrecto)
    // Recorremos el formulario para obtener los valores de los inputs

    //Si no hay ningún input checked, no correr el forEach y enviar una alert
    if (form.querySelectorAll('input:checked').length === 0) {
        alert('Por favor elija una opción');
        return;
    } else (form.querySelectorAll('input').forEach(input => {
        //si el valor del input está checked, y coincide con alguno de los elementos de correctAnswers, aplicar la clase "correct"
        if (input.checked && myQuestions[currentPosition].correctAnswers.includes(input.value)) {
            input.classList.add('correct');
            questionResult='correct'
            
        }
        //si el valor del input está checked, y no coincide con alguno de los elementos de correctAnswers, aplicar la clase "incorrect"
        else if (input.checked && !myQuestions[currentPosition].correctAnswers.includes(input.value)) {
            input.classList.add('incorrect');          
                questionResult = 'incorrect';
        }

        //si el valor del input no está checked, y coincide con alguno de los elementos de correctAnswers, aplicar la clase "incorrect"
        else if (!input.checked && myQuestions[currentPosition].correctAnswers.includes(input.value)) {
            input.classList.add('incorrect');
            questionResult = 'incorrect';
            
        }
    }));


    //Arma el objeto con los resultados
    const result = {
        correct,
        incorrect,
        questionResult,
    };

    console.log("Objeto de Resultado de la pregunta actualdesde checkAnswers", result);
    showFeedback(result);
    
    //Actualizar el estado de la pregunta.
    let currentState = getState();
    currentState.results.push(result.questionResult);
    setState(currentState);

    return result;
}


function showFeedback(result) {

    let options = document.querySelectorAll('.option'); //array con todos los elementos del form

    let correctAnswers = result.correct; //obtener un array con todas las respuestas correctas del usuario, desde el objeto result

    // añadir a cada opción la class 'correct' si coincide con alguno de los elementos de correctAnswers
    options.forEach(option => {
        if (correctAnswers.includes(option.value)) {
            option.classList.add('correct');
        }
    });



    let feedback = document.querySelector('.feedback');
    feedback.classList.remove('hidden');
    feedback.querySelector('.feedback-text').textContent = result.questionResult;
}

function hideFeedback() {
    let feedback = document.querySelector('.feedback');
    feedback.classList.add('hidden');
}


export { checkAnswers };