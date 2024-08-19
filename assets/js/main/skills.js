// Clase Lenguaje
class Lenguaje {
    constructor(nombre, porcentajeAprendizaje, descripcion, nivel) {
        this.nombre = nombre;
        this.porcentajeAprendizaje = porcentajeAprendizaje;
        this.descripcion = descripcion;
        this.nivel = nivel;
    }

    // Método para generar el HTML de un lenguaje
    generarHTML() {
        return `
            <div class="lenguaje">
                <h3>${this.nombre}</h3>
                <p>Nivel: ${this.nivel}</p>
                <div class="barra-progreso">
                    <div class="progreso" style="width: ${this.porcentajeAprendizaje}%; position: relative;">
                        <span class="porcentaje">${this.porcentajeAprendizaje}%</span>
                    </div>
                </div>
            </div>
        `;
    }
}


// Función para mostrar los lenguajes en la sección "skills"
export function mostrarLenguajes() {
    const lenguajes = [
        new Lenguaje('HTML', 90, 'Lenguaje de marcado utilizado para estructurar contenido en la web.', 'Avanzado'),
        new Lenguaje('CSS', 85, 'Lenguaje de estilos utilizado para diseñar y dar formato a páginas web.', 'Avanzado'),
        new Lenguaje('JavaScript', 80, 'Lenguaje de programación utilizado para añadir interactividad a las páginas web.', 'Intermedio'),
        new Lenguaje('PHP', 75, 'Lenguaje de programación del lado del servidor para desarrollar aplicaciones web dinámicas.', 'Intermedio'),
        new Lenguaje('React', 70, 'Biblioteca de JavaScript para construir interfaces de usuario.', 'Intermedio')
    ];

    const skillsDiv = document.getElementById('skills');
    skillsDiv.innerHTML = lenguajes.map(lenguaje => lenguaje.generarHTML()).join('');
}
