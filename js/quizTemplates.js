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

const tp_feedbackSlide = ({ question, index }) => `
<div class="sup"><h2>Tu resultado</h2></div>

</div>
    `;




export {tp_multipleChoice, tp_feedbackSlide};