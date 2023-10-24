const myQuestions = [
  {
    "questionID": "1",
    "trackProgress": [1],
    "questionType": "single-choice",
    "question": "¿Cuántos huesos tienen el pie humano?",
    "answers": {
      "a": "28 huesos",
      "b": "26 huesos",
      "c": "20 huesos",
      "d": "31 huesos"
    },
    "correctAnswers": ["b"]
  },

  {
    "questionID": "2",
    "trackProgress": [1],
    "questionType": "single-choice",
    "question": "¿En cuántas líneas longitudinales está dividido el cuerpo en la reflexología?",
    "answers": {
      "a": "En 5",
      "b": "En 10",
      "c": "En 20",
      "d": "En 3"
    },
    "correctAnswers": ["b"]
  },
  {
    "questionID": "3",
    "trackProgress": [1],
    "questionType": "multiple-choice",
    "question": "¿Qué beneficios se obtienen con la reflexología?",
    "answers": {
      "a": "Se mejora la circulación sanguínea y linfática",
      "b": "Contra dolores habituales",
      "c": "Sueño reparador",
      "d": "Ganar optimismo y energía"
    },
    "correctAnswers": ["a", "b", "c", "d"]
  },
    {
        questionID:"4",
        trackProgress: [0],
        questionType: "feedback-slide",
        question: "---",
        answers: {
            a: "-",
            b: "-o",
            c: "-",
            d: "-"
        },
        correctAnswers: ["-","-"]

    },
    // Agrega más preguntas aquí
];

export{myQuestions};