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


// Objeto que guarda el estado actual del quiz.
let state = {
    currentScore: 0,
    totalScore: 0,
    results: [], // Aquí se guardará el resultado de cada pregunta, por ejemplo: { question: "¿Pregunta?", result: "correct" }
  };
  
  const listeners = []; // Aquí se guardarán las funciones que se ejecutarán cuando se cambie el estado
  
//Métodos para obtener y actualizar el estado

  const getState = () => state; // Aquí se devolverá el estado
  
  const setState = (newState) => { 
    state = { ...state, ...newState }; // Aquí se actualizará el estado
    listeners.forEach((listener) => listener(state)); // Aquí se ejecutarán las funciones que se suscribieron
  };
 
  const subscribe = (listener) => {
    listeners.push(listener);
  };

 
  
  export { getState, setState, subscribe};