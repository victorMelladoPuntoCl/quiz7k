  // Esto implementa el patrón Publicación/Suscripción (u Observer)
  // para que los componentes puedan subscribirse a los cambios de estado
  // y que estos cambios se propagen a todos los componentes
  // que estén suscritos
  // https://refactoring.guru/es/design-patterns/observer
  // https://www.youtube.com/watch?v=OGzPm36IvQc
  
  // Por ejemplo, si un componente quiere saber si su estado ha cambiado,
  // se debería suscribir a la función setState y luego, si el estado ha cambiado,
  // se debería ejecutar la función callback que se le pasó al setState
  // https://www.youtube.com/watch?v=OGzPm36IvQ


// Inicializa el objeto state.
let state = {
    currentScore: 0, //borrar
    totalScore: 0, //borrar
    totalQuizQuestions:0,
    score:0,
    results: [], // Aquí se guardará el resultado de cada pregunta, por ejemplo: [ "correct","incorrect"]
    currentPosition:0, // Posición actual dentro del quiz (pregunta actual). Parte del 0.
    userAnswers:[], // Aquí se guardarán las respuestas del usuario. Parte del 0.
  };
  
  const listeners = []; // Aquí se guardarán las funciones que se ejecutarán cuando se cambie el estado
  
//Métodos para obtener y actualizar el estado

  const getState = () => state; // Aquí se devolverá el estado
  
  const setState = (newState) => { 
    state = { ...state, ...newState }; // Aquí se actualizará el estado (operador de ...)
    listeners.forEach((listener) => listener(state)); // Aquí se ejecutarán las funciones que se suscribieron
    console.log('setState : currentPosition:'+ state.currentPosition + ' -  score:' + state.score);
  };
 
  const registerStateListener = (listener) => {
    listeners.push(listener);
  };


  
  export { getState, setState, registerStateListener};