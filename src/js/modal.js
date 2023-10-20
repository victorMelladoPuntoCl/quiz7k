// Mostrar el modal
function showModal() {
    document.querySelector('.modal').style.display = 'block';
  }
  
  // Ocultar el modal al hacer clic en la "X"
  document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
  });
  
  // Ocultar el modal al hacer clic fuera del modal
  window.onclick = function(event) {
    const modal = document.querySelector('.modal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  export{showModal};