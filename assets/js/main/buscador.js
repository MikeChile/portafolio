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

// Función para mostrar sugerencias y mensajes
export function iniciarBuscador() {
    buscador.addEventListener('input', (e) => {
        const valor = e.target.value.trim().toLowerCase();
        const sugerenciasFiltradas = lenguajes.filter((lenguaje) => lenguaje.toLowerCase().includes(valor));

        if (valor === '') {
            sugerenciasDiv.style.display = 'none';
        } else {
            sugerenciasDiv.style.display = 'block';
            if (sugerenciasFiltradas.length === 0) {
                mostrarMensajeNoEncontrado();
            } else {
                mostrarSugerencias(sugerenciasFiltradas);
            }
        }
    });
}

// Función para mostrar mensaje especial si no se encuentran sugerencias
function mostrarMensajeNoEncontrado() {
    sugerenciasDiv.innerHTML = '<p>Lo siento, no se encontraron coincidencias... aún! Pero estoy en constante aprendizaje, así que es posible que pronto pueda ayudarte con este lenguaje..</p>';
}

// Función para mostrar sugerencias como enlaces
function mostrarSugerencias(sugerencias) {
    sugerenciasDiv.innerHTML = '';
    sugerencias.forEach((sugerencia) => {
        const enlace = document.createElement('a');
        enlace.href = `pages/lenguaje.html?leng=${sugerencia.toLowerCase().replace(/ /g, '-')}`;
        enlace.textContent = sugerencia;
        enlace.classList.add('sugerencia-enlace');
        sugerenciasDiv.appendChild(enlace);

        // Agregar un salto de línea después de cada enlace para una mejor visualización
        sugerenciasDiv.appendChild(document.createElement('hr'));
    });
}
