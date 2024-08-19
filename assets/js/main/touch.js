let xDown = null; // Posición X inicial del toque
let yDown = null; // Posición Y inicial del toque

// Función para manejar el inicio del toque
export function handleTouchStart(evt) {
    const firstTouch = evt.touches[0]; // Obtiene el primer toque
    xDown = firstTouch.clientX; // Guarda la posición X
    yDown = firstTouch.clientY; // Guarda la posición Y
};

// Función para manejar el movimiento del toque
export function handleTouchMove(evt, isMobile, currentSection, numSections, moveToSection) {
    if (!xDown || !yDown) {
        return; // Si no hay una posición de toque inicial, sale de la función
    }

    // Obtiene la posición del toque actual
    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    // Calcula la diferencia entre el toque inicial y el actual
    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    // Determina si el movimiento fue horizontal o vertical
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        // Movimiento horizontal
        if (xDiff > 0) {
            // Desplazamiento hacia la izquierda, avanza a la siguiente sección
            currentSection = (currentSection + 1) % numSections;
        } else {
            // Desplazamiento hacia la derecha, retrocede a la sección anterior
            currentSection = (currentSection - 1 + numSections) % numSections;
        }
        // Mueve a la sección correspondiente en dispositivos de escritorio
        if (!isMobile) {
            moveToSection(currentSection);
        }
    } else {
        // Movimiento vertical
        if (yDiff > 0) {
            // Desplazamiento hacia abajo, avanza a la siguiente sección
            currentSection = (currentSection + 1) % numSections;
        } else {
            // Desplazamiento hacia arriba, retrocede a la sección anterior
            currentSection = (currentSection - 1 + numSections) % numSections;
        }
        // Mueve a la sección correspondiente en dispositivos móviles
        if (isMobile) {
            moveToSection(currentSection);
        }
    }
    // Reinicia las posiciones de toque
    xDown = null;
    yDown = null;
};
