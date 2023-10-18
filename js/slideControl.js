/**
 * Función para avanzar al siguiente slide
 * @param {NodeList} currentArray La lista actual de slides
 * @param {Integer} currentPosition La posición actual del slide
 * @param {NodeList} slider El contenedor del slider
 * @returns La nueva posición del slide
 */
function nextSlide(currentArray, currentPosition, slider) {
    if (currentPosition < currentArray.length - 1) {      
        let newPosition = currentPosition + 1;
        updateSlide(newPosition, currentArray, slider);
        return newPosition;
    } else {
        return currentPosition;
    }
};

/**
 * Función para retroceder al slide anterior
 * @param {*} currentArray 
 * @param {*} currentPosition 
 * @param {*} slider 
 * @returns 
 */

function prevSlide(currentArray, currentPosition, slider) {
   if (currentPosition > 0) {   // Si la posición actual es mayor que cero 
        let newPosition = currentPosition - 1; // Resta uno a la posición actual       
        updateSlide(newPosition, currentArray, slider); //Genera el movimiento
        return (newPosition); // Devuelve la nueva posición
    } else{
        return (currentPosition); // Devuelve la posición actual sin actualizar
    }
};

// Función para actualizar la vista del slide
function updateSlide(newPosition, currentArray,slider) { 
    //Mueve todo el slider. Se mueve el slider a la posición indicada por newPosition
    slider.style.transform = `translateX(-${newPosition * 100}%)`;
    console.log('updateSlide newPosition: '+newPosition);
};



let currentPosition = 0;

export{nextSlide,prevSlide,updateSlide,currentPosition};