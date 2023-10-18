let state = {
    score: 0,
  };
  
  const listeners = [];
  
  const getState = () => state;
  
  const setState = (newState) => {
    state = { ...state, ...newState };
    listeners.forEach((listener) => listener(state));
  };
  
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

  const subscribe = (listener) => {
    listeners.push(listener);
  };
  
  export { getState, setState, subscribe };