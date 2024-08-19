// Función para manejar el desplazamiento con la rueda del ratón
export function handleScroll(event, currentSection, numSections) {
    // Si el desplazamiento es hacia abajo
    if (event.deltaY > 0) {
        // Avanza a la siguiente sección, utilizando módulo para el ciclo infinito
        return (currentSection + 1) % numSections;
    } else {
        // Si el desplazamiento es hacia arriba, retrocede a la sección anterior
        return (currentSection - 1 + numSections) % numSections;
    }
}
