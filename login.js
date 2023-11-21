// Esto es para que el codigo Jquery se ejecute luego del HTML
$(document).ready(function () {
    $("#loginForm").submit(function (event) {
        event.preventDefault();
        var email = $("#exampleInputEmail1").val();
        var password = $("#exampleInputPassword1").val();
        if (email && email.includes("@") && password) {
            window.location.href = "MisCursos.html";
        } else {
            alert("Por favor, ingresa un correo electrónico válido y una contraseña.");
        }
    });
});

