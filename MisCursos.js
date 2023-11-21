document.addEventListener('DOMContentLoaded', function () {
    const campoBusqueda = document.getElementById('busqueda');
    const cursos = document.querySelectorAll('.card');

    campoBusqueda.addEventListener('input', function () {
        const textoBusqueda = this.value.toLowerCase();

        cursos.forEach(curso => {
            const tituloCurso = curso.querySelector('.card-title').innerText.toLowerCase();

            if (tituloCurso.includes(textoBusqueda)) {
                curso.parentElement.style.display = 'block'; // Muestra el curso si coincide con la búsqueda
            } else {
                curso.parentElement.style.display = 'none'; // Oculta el curso si no coincide con la búsqueda
            }
        });
    });
});

// Esto es para que el codigo Jquery se ejecute luego del HTML
$(document).ready(function () {
    $('.card').click(function () {
        $('.detalles').hide();
        $(this).find('.detalles').show();
    });
    $('.detalles').hide();
    $('.detalles-btn').click(function () {
        $(this).siblings('.contenidos-lista').slideToggle();
    });

});



