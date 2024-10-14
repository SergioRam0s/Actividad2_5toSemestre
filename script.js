// script.js

// Capturamos los elementos del modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

// Abrir el modal al hacer clic en el botón
btn.onclick = function() {
    modal.style.display = "block";
}

// Cerrar el modal al hacer clic en la 'X'
span.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Capturamos el formulario y el mensaje de confirmación
const form = document.getElementById('commentForm');
const message = document.getElementById('formMessage');

// Evento de envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Capturamos los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    // Verificamos si todos los campos tienen contenido
    if (name && email && comment) {
        message.textContent = 'Gracias por tu comentario, ' + name + '. ¡Nos pondremos en contacto contigo!';
        message.style.color = 'lightgreen';
        form.reset(); // Limpiar el formulario
    } else {
        message.textContent = 'Por favor, completa todos los campos.';
        message.style.color = 'red';
    }
});
