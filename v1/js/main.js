const forms = document.querySelectorAll('.quiz-form');

forms.forEach(function(form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario y la recarga de la página

    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {

      const parentDiv = checkbox.closest('label');

      if (checkbox.checked) {
        parentDiv.classList.add('correct');
      } else {
        parentDiv.classList.add('incorrect');
      }
    });
  });
});