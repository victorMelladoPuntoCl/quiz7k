const myQuestions = [
    {
        questionID:"1",
        trackProgress: [1],
        questionType: "multiple-choice",
        question: "Las respuestas correctas son: verde y azul.",
        answers: {
            a: "verde",
            b: "azul",
            c: "naranja",
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
        trackProgress: [1],
        questionType: "single-choice",
        question: "¿de qué color es el plátano?",
        answers: {
            a: "verde",
            b: "azul",
            c: "naranja",
            d: "amarillo"
        },
        correctAnswers: ["d"],
        lastIntentCheck:{
            correct: ["a","b"],
            incorrect: [],
            questionResult: ["correct"]
        }
    },
    {
        questionID:"3",
        trackProgress: [1],
        questionType: "multiple-choice",
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
    {
        questionID:"4",
        trackProgress: [1],
        questionType: "multiple-choice",
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
    {
        questionID:"5",
        trackProgress: [1],
        questionType: "multiple-choice",
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
    {
        questionID:"6",
        trackProgress: [0],
        questionType: "feedback-slide",
        question: "---",
        answers: {
            a: "-",
            b: "-o",
            c: "-",
            d: "-"
        },
        correctAnswers: ["-","-"],
        lastIntentCheck:{
            correct: ["-","-"],
            incorrect: [],
            questionResult: ["--"]
        }

    },
    // Agrega más preguntas aquí
];


export{myQuestions};