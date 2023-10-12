
const myQuestions = [
    {
        questionID:"1",
        questionType: "multiple-choice",
        question: "Las respuestas correctas son: verde y azul.",
        answers: {
            a: "verde",
            b: "azul",
            c: "naranja",
            d: "anaranjada",

        },
        correctAnswers: ["a", "b"],
        lastIntentCheck:{
            correct: ["a","b"],
            incorrect: [],
            questionResult: ["correct"]
        }
    },
    {
        questionID:"2",
        questionType: "single-choice",
        question: "¿de qué color es el plátano?",
        answers: {
            a: "verde",
            b: "azul",
            c: "naranja",
            d: "amarillo"
        },
        correctAnswers: ["b"],
        lastIntentCheck:{
            correct: ["a","b"],
            incorrect: [],
            questionResult: ["correct"]
        }
    },
    {
        questionID:"3",
        questionType: "single-choice",
        question: "Son correctas: Pera y Manzana",
        answers: {
            a: "Pera",
            b: "Trigo",
            c: "Manzana",
            d: "Leche"
        },
        correctAnswers: ["a","c"],
        lastIntentCheck:{
            correct: ["a","b"],
            incorrect: [],
            questionResult: ["correct"]
        }

    },
    // Agrega más preguntas aquí
];


export{myQuestions};