const tp_multipleChoice = ({ question, index }) => `
<div><h2>${question.question}</h2></div>
<div class="quiz-form-container">
</div>
    <form id="${index}" class="question-options">
        
        <span class="deco-top"></span>
        <ul>
        
            ${Object.entries(question.answers).map(([key, answer]) => `
                <li><label for="${key}" class="option">
                    <input type="${question.questionType === 'single-choice' ? 'radio' : 'checkbox'}" id="${key}" name="answers" value="${key}">
                    <p>${answer}</p>
                    </label>
                </li>
            `).join('')}
        </ul>

        <input type="hidden" name="questionID" value="${index}" class="questionID">
        <input type="hidden" name="questionIndex" value="${index}" class="questionIndex">
        <div class="questionFt">
        <button type="submit" class="submitButton">COMPROBAR</button>
        </div>
    </form>
`;



export {tp_multipleChoice};