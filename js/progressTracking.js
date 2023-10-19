import {setState,getState } from "./state.js";
import { myQuestions } from "./quizdata.js";

// Función que construye dentro del ul .progressbar los li en base a la cantidad de preguntas en myQuestions
const buildProgressTracking = (myQuestions) => {
    
    //construir un li por cada pregunta en myQuestions con un forEach
    myQuestions.forEach((question) => {
        console.log(question.trackProgress[0]);
        const li = document.createElement("li");
        li.classList.add("step");
        document.querySelector(".progressbar").appendChild(li);
    }
)
}

    //función que actualiza la clase active de los li en base a la posición actual de la pregunta
    const updateProgress = (currentPosition) => {
        const steps = document.querySelectorAll(".step");
        steps.forEach((step, index) => {
            if (index < currentPosition) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }
        });
    }

    //función que actualiza las clases de los li en base al estado de las preguntas en getState.results
    const updateProgressWithResults = () => {
        const steps = document.querySelectorAll(".step");
        steps.forEach((step, index) => {
            const result = getState().results[index];
            if (result) {
                step.classList.add(result);
            }
        });
        console.log('getState.results ='+getState().results);
    }




export{buildProgressTracking, updateProgress, updateProgressWithResults}