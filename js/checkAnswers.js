import { getState, setState, subscribe} from "/js/state.js";
import{nextSlide,prevSlide,updateSlide} from "/js/slideControl.js";

//Función que recibe un array de respuestas, un array de respuestas correctas y devuelve un objeto con las respuestas correctas, 
//incorrectas y el resultado de la pregunta.

function checkAnswers(event, myQuestions, userAnswers, currentPosition) {

    console.log('event, myQuestions, userAnswers, currentPosition');
    console.dir(event); //evento que se ha enviado
    console.dir(myQuestions); //array de preguntas
    console.dir('UserAnswers:'+userAnswers); //array de respuestas del usuario
    console.dir(currentPosition);
    console.log('Correct Answers:'+myQuestions[currentPosition].correctAnswers);
    let form = event.target;
    let questionID = form.querySelector('input[name="questionID"]').value;

    let correct = [];
    let incorrect = [];
    let questionResult = '';

    //Si el array de preguntas correctas es igual al de las respuestas del usuario, entonces es correcto
    if (JSON.stringify(myQuestions[currentPosition].correctAnswers) === JSON.stringify(userAnswers)) {
        correct.push(currentPosition);
        questionResult = 'Correcto';

    }
    else {
        incorrect.push(currentPosition);
        questionResult = 'Incorrecto';
    }


    // Recorremos el formulario para obtener los valores de los inputs
    form.querySelectorAll('input').forEach(input => {
        //si el valor del input está checked, y coincide con alguno de los elementos de correctAnswers, aplicar la clase "correct"
        if (input.checked && myQuestions[currentPosition].correctAnswers.includes(input.value)) {
            input.classList.add('correct');
        }
        //si el valor del input está checked, y no coincide con alguno de los elementos de correctAnswers, aplicar la clase "incorrect"
        else if (input.checked && !myQuestions[currentPosition].correctAnswers.includes(input.value)) {
            input.classList.add('incorrect');
        }

        //si el valor del input no está checked, y coincide con alguno de los elementos de correctAnswers, aplicar la clase "incorrect"
        else if (!input.checked && myQuestions[currentPosition].correctAnswers.includes(input.value)) {
            input.classList.add('incorrect');
        }
      
    });



    

    


    //Arma el objeto con los resultados
    const result = {
        correct,
        incorrect,
        questionResult,
    };

    console.log("Objeto de Resultado:", result);
    showFeedback(result);

    return result;
}


function addResultClass(result) {


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


export {checkAnswers};