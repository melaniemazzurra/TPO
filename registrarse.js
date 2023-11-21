$(document).ready(function () {
    $('form').submit(function (event) {
        // Validar el correo electrónico
        var email = $('#email').val();
        if (email.indexOf('@') === -1) {
            alert('Por favor, ingrese un correo electrónico válido.');
            event.preventDefault();
            return;
        }
        var password = $('#password').val();
        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            event.preventDefault();
            return;
        }
        window.location.href = 'MisCursos.html';
        event.preventDefault();
    });
});


