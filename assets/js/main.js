$(document).ready(function() {
    
    //html
    $('#html').hover(function() {
        $(this).find('h4').animate({
            'font-size': '24px'
        }, 200);
        $(this).css({
            'background-color': 'orange',
            'border-radius': '10px',
            'color': '#333'
        });
    }, function() {
        $(this).find('h4').animate({
            'font-size': '18px'
        }, 200);
        $(this).css({
            'background-color': '',
            'border-radius': '',
            'color': 'white'
        });
    });

    //css
    $('#css').hover(function() {
        $(this).find('h4').animate({
            'font-size': '24px'
        }, 200);
        $(this).css({
            'background-color': '#ADD8E6', // Azul claro
            'border-radius': '10px',
            'color': '#333'
        });
    }, function() {
        $(this).find('h4').animate({
            'font-size': '18px'
        }, 200);
        $(this).css({
            'background-color': '',
            'border-radius': '',
            'color': 'white'
        });
    });

    //js
    $('#js').hover(function() {
        $(this).find('h4').animate({
            'font-size': '24px'
        }, 200);
        $(this).css({
            'background-color': 'yellow',
            'border-radius': '10px',
            'color': '#333'
        });
    }, function() {
        $(this).find('h4').animate({
            'font-size': '18px'
        }, 200);
        $(this).css({
            'background-color': '',
            'border-radius': '',
            'color': 'white'
        });
    });

    //cambiando imagen y texto
    var htmlEstado = true;
    var cssEstado = true;
    var jsEstado = true;

    $('#html').click(function() {
        if (htmlEstado) {
            $(this).find('h4').hide(); // Oculta el texto
            $(this).append('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png" alt="HTML5 Logo" class="img-fluid img-hab">'); // Agrega la imagen
            htmlEstado = false;
        } else {
            $(this).find('img').remove(); // Elimina la imagen
            $(this).find('h4').show(); // Muestra el texto
            htmlEstado = true;
        }
    });

    $('#css').click(function() {
        if (cssEstado) {
            $(this).find('h4').hide(); // Oculta el texto
            $(this).append('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/120px-CSS3_logo.svg.png" alt="CSS3 Logo" class="img-fluid img-hab">'); // Agrega la imagen
            cssEstado = false;
        } else {
            $(this).find('img').remove(); // Elimina la imagen
            $(this).find('h4').show(); // Muestra el texto
            cssEstado = true;
        }
    });

    $('#js').click(function() {
        if (jsEstado) {
            $(this).find('h4').hide(); // Oculta el texto
            $(this).append('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/120px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript Logo" class="img-fluid img-hab">'); // Agrega la imagen
            jsEstado = false;
        } else {
            $(this).find('img').remove(); // Elimina la imagen
            $(this).find('h4').show(); // Muestra el texto
            jsEstado = true;
        }
    });

    //Formulario
    $('#formulario').submit(function(event) {
        event.preventDefault(); // Evita que el formulario se envíe

        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();
        var email = $('#email').val();
        var mensaje = $('#mensaje').val();

        var datos = 'Nombre: ' + nombre + '\nApellido: ' + apellido + '\nCorreo electrónico: ' + email + '\nMensaje: ' + mensaje;

        if (confirm('¿Estos datos están correctos?\n' + datos)) {
            alert('¡Gracias por su mensaje, pronto nos comunicaremos con usted!');
        }
    });
    
   
});