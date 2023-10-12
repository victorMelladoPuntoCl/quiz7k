const myQuestions = [
    {
        question: "¿de qué color es la naranja?",
        answers: {
            a: "verde",
            b: "azul",
            c: "naranja",
            d: "anaranjada",
            e: "anaranjada",
            f: "anaranjada"
        },
        correctAnswers: ["a", "b"],
        questionType: "multiple-choice"
    },
    {
        question: "¿de qué color es el plátano?",
        answers: {
            a: "verde",
            b: "azul",
            c: "naranja",
            d: "amarillo"
        },
        correctAnswers: ["b"],
        questionType: "single-choice"
    },
    {
        question: "¿de qué color es el plátano?2",
        answers: {
            a: "verde",
            b: "azul",
            c: "naranja",
            d: "amarillo"
        },
        correctAnswers: ["b"],
        questionType: "single-choice"
    },
    {
        question: "¿de qué color es el plátano?3",
        answers: {
            a: "verde",
            b: "azul",
            c: "naranja",
            d: "amarillo"
        },
        correctAnswers: ["b"],
        questionType: "single-choice"
    },
    {
        question: "¿de qué color es el plátano?4",
        answers: {
            a: "verde",
            b: "azul",
            c: "naranja",
            d: "amarillo"
        },
        correctAnswers: ["b"],
        questionType: "single-choice"
    },
    // Agrega más preguntas aquí
];

let currentQuestion = 0;
let userAnswers = [];

const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function buildQuestion(myQuestions, currentQuestion) {
    slides.forEach((slide, index) => {
        const question = myQuestions[currentQuestion];
        slide.innerHTML = `
            <div class="">
            </div>

            <div>
            <h2>${question.question}</h2>
            </div>
            
            <div class="quiz-form-container" >
                
                <form id="${currentQuestion}" class="question-options">
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
                    <button type="submit" >COMPROBAR</button>
                </form>
            </div>
        `;

         // Agregar un evento "submit" a cada formulario
         const form = slide.querySelector('form');
         form.addEventListener('submit', function (event) {
             event.preventDefault(); // Evitar que el formulario se envíe
             const formData = new FormData(form);
             // Aquí puedes acceder a los valores del formulario en "formData"
             // Por ejemplo, si deseas obtener el valor de una pregunta específica:
             const selectedAnswers = formData.getAll('answers');
             console.log(selectedAnswers);
         });





    });
}

buildQuestion(myQuestions, currentQuestion);

prevButton.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        buildQuestion(myQuestions, currentQuestion);
        slider.style.transform = `translateX(-${currentQuestion * 100}%)`;
    }
});

nextButton.addEventListener('click', () => {
    if (currentQuestion < myQuestions.length - 1) {
        currentQuestion++;
        buildQuestion(myQuestions, currentQuestion);
        slider.style.transform = `translateX(-${currentQuestion * 100}%)`;
    }
});