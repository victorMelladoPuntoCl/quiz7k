const tp_multipleChoice = ({ question, index }) => `
<div><h2>${question.question}</h2></div>
<div class="quiz-form-container">
</div>
    <form id="${index}" class="question-options">
        <span class="deco-top"></span>
        <ul>
            ${Object.entries(question.answers).map(([key, answer]) => `
                <li><label for="${key}">
                    <input type="${question.questionType === 'single-choice' ? 'radio' : 'checkbox'}" id="${key}" name="answers" value="${key}">
                    <p>${answer}</p>
                    </label>
                </li>
            `).join('')}
        </ul>
        <button type="submit">COMPROBAR</button>
    </form>


`;

export {tp_multipleChoice};