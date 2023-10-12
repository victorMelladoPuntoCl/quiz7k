/**
 * Compara las respuestas del usuario con las respuestas correctas de una pregunta y devuelve un objeto con el resultado.
 *
 * @param {Array} questionAnswers - Las respuestas de la pregunta.
 * @param {Array} userAnswers - Las respuestas del usuario.
 * @param {Array} correctAnswers - Las respuestas correctas.
 * @returns {Object} - Un objeto con las respuestas correctas, incorrectas y el resultado de la pregunta.
 *
 * @example
 * const result = checkAnswers(["a", "b", "c", "d"], ["b"], ["a", "b"]);
 * console.log("Resultado de la pregunta:", result.questionResult);
 * console.log("Respuestas Correctas:", result.correct);
 * console.log("Respuestas Incorrectas:", result.incorrect);
 */

function checkAnswers(questionAnswers, userAnswers, correctAnswers) {
    const correct = [];
    const incorrect = [];

    for (let i = 0; i < questionAnswers.length; i++) {
        if (userAnswers.includes(questionAnswers[i])) {
            if (correctAnswers.includes(questionAnswers[i])) {
                correct.push(questionAnswers[i]);
            }
        } else if (correctAnswers.includes(questionAnswers[i])) {
            incorrect.push(questionAnswers[i]);
        }
    }

    let questionResult = "correct";
    if (correct.length < correctAnswers.length || incorrect.length > 0) {
        questionResult = "incorrect";
    }

    const result = {
        correct,
        incorrect,
        questionResult,
    };

    console.log("Resultado:", result);
    
        console.log("Resultado de la pregunta:", result.questionResult);
        console.log("Respuestas Correctas:", result.correct);
        console.log("Respuestas Incorrectas:", result.incorrect);
    return result;
}
