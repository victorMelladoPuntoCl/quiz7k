
import { getState, setState } from "./state.js";

//Función que recibe un array de respuestas, un array de respuestas correctas y devuelve un objeto con las respuestas correctas, 
//incorrectas y el resultado de la pregunta.


/**
 * checkAnswers
 * @param {HTMLFormElement} formHTML //Formulario sobre el que se muestra feedback posterior.
 * @param {Object} myQuestions 
 * @param {array} userAnswers 
 * @param {int} key  //posición del array de preguntas que se está corrigiendo.
 * @param {array} correctQuestionAnswers 
 * @returns resultado de la pregunta
 */
function checkAnswers(formHTML, myQuestions, userAnswers, key, correctQuestionAnswers) { //eliminado currentPosition, lo pediremos al evento que lo generó.
    //Arma el objeto con los resultados
    let correct = []; //guarda las opciones marcadas correctas para el feedback posterior.
    let incorrect = []; //guarda las opciones marcadas incorrectas para el feedback posterior.
    let questionResult = '';
    let questionID = myQuestions[key].questionID;
    let questionKey = key;
    let state = getState();

    let score = state.score;
 


    // Marcar los botones de pregunta según corresponda (correcto/incorrecto)
    // Recorremos el formulario para obtener los valores de los inputs
    //Si no hay ningún input checked, no correr el forEach y enviar una alert
    
    if (userAnswers.length===0) {
        alert('Por favor elija una opción');
        return;
    } else {

        let allOptions = (Object.keys(myQuestions[key].answers)); //obtener todas las opciones de la pregunta actual. 
        allOptions.sort(); //ordenar las respuestas de la pregunta actual.
        userAnswers.sort(); //ordenar las respuestas del usuario.
        correctQuestionAnswers.sort(); //ordenar las respuestas correctas de la pregunta actual.

        //Obtener el resultado general de la pregunta, 
        //comparando userAnswers con correctQuestionAnswers.
        //si son exactamente iguales, questionResult es correct.
        //si no es así, questionResult es incorrect.
        if (JSON.stringify(userAnswers) === JSON.stringify(correctQuestionAnswers)) {
            questionResult = 'correct';
            state.score++;
        }
        else {
            questionResult = 'incorrect';
        }
        state.results.push(questionResult); //añadir un 'correct' o 'incorrect' al array de resultados.

        //Recorrer el array de respuestas del usuario y poblar los arrays de alternativas correctas e incorrectas.
        userAnswers.forEach(answer => {
            if (correctQuestionAnswers.includes(answer)) {
                correct.push(answer);
            } else {
                incorrect.push(answer);
            };
        })
    
    } //fin else.

        
        let questionresultDetails= {
            questionID,
            questionKey,
            userAnswers,
            score,
            correctQuestionAnswers,
            correct,
            incorrect,
            questionResult
        };

    

    //guardar todos los cambios en el state.
    setState(state);


    //enviar el detalle de las respuestas a showFeedback para mostrarlas y mostrar la pantalla de resultado de la pregunta
    showFeedback(questionresultDetails);

return questionresultDetails;
}

/**
 * Se hace cargo de mostrar al usuario el feedback de la pregunta y habilitarlo para continuar.
 * @param {Object} resultDetailsObject 
 */

function showFeedback(resultDetailsObject) {

    let result = resultDetailsObject; //objeto con los detalles de la pregunta y sus resultados.

    //recuperar el formulario de la pregunta actual
    let key= resultDetailsObject.questionKey;
    let form = document.getElementById(resultDetailsObject.questionKey);
    
    //Mostrar la ventana de feedback
    let feedback = document.querySelector('.feedback');
    feedback.classList.remove('hidden'); //mostrar la ventana de feedback
    feedback.classList.add('animate__animated', 'animate__bounceIn');

    if (result.questionResult === 'correct') {
           feedback.querySelector('.feedback-text').textContent = "¡Excelente!"
    } else {
        feedback.querySelector('.feedback-text').textContent = "Tienes respuestas incorrectas, te recomendamos revisar el contenido y reintentar.";
    }

   
    //obtener un array con todas las respuestas correctas del usuario, desde el objeto result
    // añadir a cada opción la class 'correct' si coincide con alguno de los elementos de correctAnswers

    let options = form.querySelectorAll('ul input'); //array con todos los elementos del form
    let correctQuestionAnswers = resultDetailsObject.correctQuestionAnswers; // array con todas las respuestas correctas de la pregunta actual.
    let correctAnswers = resultDetailsObject.correct; // array con todas las respuestas correctas del usuario
    let incorrectAnswers = resultDetailsObject.incorrect; // array con todas las respuestas incorrectas del usuario

    //recorrer todas las options de la pregunta
    console.log (correctAnswers);
    options.forEach(option => {
        
        //si la opción está en correctAnswers, añadir la class 'correct'
        if (option.checked && correctAnswers.includes(option.value)) {
            option.classList.add('correct');
        }

        //si la opción está en incorrectAnswers, añadir la class 'incorrect'
        if (option.checked && incorrectAnswers.includes(option.value)) {
            option.classList.add('incorrect');
        
        } 
        //si la opción no está marcada, pero está en correctAnswers, añadir la clase 'incorrect-unchecked'
        if (option.checked == false && correctQuestionAnswers.includes(option.value)){
            console.log("faltó marcar: "+option.value);
            option.classList.add('incorrect-unchecked');

        }

    });



    
    
}



export { checkAnswers };