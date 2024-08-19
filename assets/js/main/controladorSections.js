// Función para inicializar las líneas indicadoras
export function inicializarIndicadores() {
    const indicators = document.querySelectorAll('.indicator');

    // Función para actualizar el estado de los indicadores
    function actualizarIndicadores(currentSection) {
        indicators.forEach((indicator, idx) => {
            indicator.classList.toggle('active', idx === currentSection);
        });
    }

    return actualizarIndicadores;
}
