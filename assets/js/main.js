$(document).ready(function() {
    
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