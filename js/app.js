const alertContainer = document.querySelector('.alert-container');
const alert = document.querySelector('.btn-alert');
const dot = document.querySelector('.dot');

// Removes alert bar
alert.addEventListener('click', () => {
    alertContainer.innerHTML = "";
    dot.style.display = "none";
  });