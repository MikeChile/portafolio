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

  const palabras = ['Desarrollador web', 'Programador PHP', 'Programador JavaScript'];
  let indice = 0;
  let tiempo = 4000; // Tiempo en milisegundos entre cada palabra

  function escribirPalabra() {
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
  }

  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('fondo');
    } else {
      header.classList.remove('fondo');
    }
  });

  escribirPalabra();

  const buscador = document.getElementById('buscador');
  const sugerenciasDiv = document.getElementById('sugerencias');

  const lenguajes = [
    'HTML',
    'PHP',
    'JavaScript',
    'CSS',
    'React',
    'Angular',
    'Vue',
    'Node.js',
    'Ruby',
    'Python'
  ];

  //BUSCADOR
  buscador.addEventListener('input', (e) => {
    const valor = e.target.value.trim().toLowerCase();
    const sugerenciasFiltradas = lenguajes.filter((lenguaje) => lenguaje.toLowerCase().includes(valor));

    if (valor === '') {
      sugerenciasDiv.style.display = 'none';
    } else {
      sugerenciasDiv.style.display = 'block';
      mostrarSugerencias(sugerenciasFiltradas);
    }
  });

  //MOSTRAR SUGERENCIAS
  function mostrarSugerencias(sugerencias) {
    sugerenciasDiv.innerHTML = '';
    sugerencias.forEach((sugerencia) => {
      const opcion = document.createElement('div');
      opcion.textContent = sugerencia;
      sugerenciasDiv.appendChild(opcion);
    });
  }


  //BOTON IR ABAJO
  const btnIrAbajo = document.getElementById('btn-ir-abajo');
  const seccionAbout = document.getElementById('about');

  btnIrAbajo.addEventListener('click', () => {
    seccionAbout.scrollIntoView({ behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      btnIrAbajo.style.opacity = '0';
      btnIrAbajo.style.transition = 'opacity 0.5s';
    } else {
      btnIrAbajo.style.opacity = '1';
      btnIrAbajo.style.transition = 'opacity 0.5s';
    }
  });


});