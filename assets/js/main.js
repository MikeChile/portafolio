$(document).ready(function () {

  let numbers = document.querySelectorAll('.number');
  let percentages = [95, 85, 60, 75]; // Porcentajes deseados

  numbers.forEach((number, index) => {
    let counter = 0;
    function animate() {
      if (counter >= percentages[index]) {
        return;
      }
      counter += 1;
      number.innerHTML = number.dataset.skill + " " + counter + "%";
      requestAnimationFrame(animate);
    }
    animate();
  });


  //Formulario
  $('#formulario').submit(function (event) {
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

  const palabras = ['Desarrollador web', 'Programador PHP', 'Programador JavaScript', 'Programador Full-Stack', 'Administrador de Bases de Datos'];
  let indice = 0;
  let tiempo = 4000; // Tiempo en milisegundos entre cada palabra


  /* function escribirPalabra() {
    const palabra = palabras[indice];
    const span = document.querySelector('.typing-2');
    const simbolo = document.querySelector('.simbolo-tipeo');
    let texto = '';

    for (let i = 0; i < palabra.length; i++) {
      setTimeout(() => {
        texto += palabra[i];
        span.innerHTML = texto;
      }, i * 100); // Tiempo en milisegundos entre cada letra
    }

    setTimeout(() => {
      simbolo.classList.add('parpadeo'); // Iniciar el efecto de parpadeo

      // Eliminar la palabra letra a letra
      for (let i = palabra.length - 1; i >= 0; i--) {
        setTimeout(() => {
          span.innerHTML = palabra.slice(0, i);
        }, (palabra.length - i) * 100); // Tiempo en milisegundos entre cada letra
      }

      setTimeout(() => {
        simbolo.classList.remove('parpadeo'); // Detener el efecto de parpadeo
        indice = (indice + 1) % palabras.length; // Cambiar a la siguiente palabra
        escribirPalabra(); // Llamar a la función nuevamente
      }, palabra.length * 100 + 1000); // Tiempo en milisegundos para el efecto de parpadeo y eliminación de la palabra
    }, tiempo);
  } */

  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('fondo');
    } else {
      header.classList.remove('fondo');
    }
  });

  escribirPalabra();


  window.addEventListener("wheel", function (e) {
    if (e.deltaY !== 0) {
      // Desplazamiento horizontal en lugar de vertical
      window.scrollBy({
        left: e.deltaY * 3, // Puedes ajustar la velocidad del scroll
        behavior: "smooth"
      });
    }
  });


});