
//*AVANCE Y RETROCESO POR LOS SLIDES*//

// Función para avanzar al siguiente slide
function nextSlide(currentArray, currentPosition, slider) {
    console.log('nextslide \n currentArray.length = '+ currentArray.length);
    console.log('currentPosition = '+ currentPosition);
    console.log(currentPosition < currentArray.length - 1);
    if (currentPosition < currentArray.length -1) {      
        let newPosition = currentPosition + 1;
        updateSlide(newPosition, currentArray, slider);
        return (newPosition);
    } else {
        return (currentPosition);
    }
};

// Función para retroceder al slide anterior
function prevSlide(currentArray, currentPosition, slider) {
    console.log("-----"+currentPosition);
    if (currentPosition > 0) {    
        let newPosition = currentPosition - 1;
        console.log("prevSlide | "+ currentPosition+" > "+newPosition);
        console.log('updateSlide newPosition: '+newPosition);
        updateSlide(newPosition, currentArray, slider);   
        return (newPosition);
    } else{
        return (currentPosition);
    }
    
};

// Función para actualizar la vista del slide
function updateSlide(newPosition, currentArray,slider) { 
    slider.style.transform = `translateX(-${newPosition * 100}%)`;
    console.log('updateSlide newPosition: '+newPosition);
};

let currentPosition = 0;

export{nextSlide,prevSlide,updateSlide,currentPosition};