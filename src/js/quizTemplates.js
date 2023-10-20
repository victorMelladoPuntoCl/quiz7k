import { setState,getState,registerStateListener } from "./state.js";

const tp_multipleChoice = ({ question, index }) => `
<div class="sup"><h2>${question.question}</h2></div>
<div class="quiz-form-container">
</div>
    <form id="${index}" class="question-options">
        
        <span class="deco-top"></span>
        <ul>
        
            ${Object.entries(question.answers).map(([key, answer]) => `
                <li><label for="${index}-${key}" class="option">
                    <input type="${question.questionType === 'single-choice' ? 'radio" name="group-question-'+question.questionID : 'checkbox'}" id="${index}-${key}" value="${key}" group="">
                    <p>${answer}</p>
                    </label>
                </li>
            `).join('')}
        </ul>

        <input type="hidden" name="questionID" value="${index}" class="questionID">
        <input type="hidden" name="questionIndex" value="${index}" class="questionIndex">
        <div class="questionFt">
        <button type="submit" class="submitButton main-button">COMPROBAR</button>
        </div>
    </form>
`;

/**
 * 
 * @returns HTML Pantalla de resultado final.
 */

const tp_feedbackSlide = function(state){

    function updateFeedbackSlide(state){

        let totalQuizQuestions = state.totalQuizQuestions;
        let score = state.score;
        let message = '';

        if (totalQuizQuestions==score){
            message='¡Muy bien!'; 
        } else{
            message='¡Vuelve a intentarlo!';
        };
    
        let HTMLContent = `
        <div class="sup">
        <h2 class=''>Tu resultado:</h2>
        <h2 class='quiz-result'>Preguntas totales:${totalQuizQuestions}</h2>
        <h2 class='quiz-result'>Respuestas correctas: ${score}<h2>
        <h2 class='quiz-result-text'>${message}</h2>
        <button class="main-button" onclick="location.reload()">REINICIAR</button>
        </div>
        `;
        console.log(HTMLContent);
        return HTMLContent;
        
    }

    registerStateListener (updateFeedbackSlide); //devuelve cada vez que hay un set.
    

return updateFeedbackSlide(state); //devuelve por primera vez.
}



export {tp_multipleChoice, tp_feedbackSlide};