// Importa las funciones para manejar el desplazamiento, el toque, el tipeo y el buscador desde los módulos correspondientes
import { handleScroll } from './scroll.js';
import { handleTouchStart, handleTouchMove } from './touch.js';
import { escribirPalabra } from './escribirPalabra.js';
import { iniciarBuscador } from './buscador.js';
import { mostrarLenguajes } from './skills.js'; // Importa la función para mostrar las habilidades
import { inicializarIndicadores } from './controladorSections.js'; // Importa la función para inicializar los indicadores

// Inicializa la sección actual en la que estamos y selecciona todas las secciones
let currentSection = 0;
const sections = document.querySelectorAll('.section');

// Detecta si estamos en un dispositivo móvil (pantalla con ancho máximo de 1024px)
const isMobile = window.matchMedia("(max-width: 1024px)").matches;

// Inicializa los indicadores de sección
const actualizarIndicadores = inicializarIndicadores();

// Función para mover a una sección específica
function moveToSection(index) {
    sections.forEach((section, idx) => {
        section.classList.remove('active');
        section.style.transform = isMobile ? `translateY(100%) scale(0.95)` : `translateX(100%) scale(0.95)`;
        if (idx === index) {
            section.classList.add('active');
        }
    });

    if (isMobile) {
        sections[index].style.transform = `translateY(0) scale(1)`;
    } else {
        sections[index].style.transform = `translateX(0) scale(1)`;
    }

    // Actualiza los indicadores de sección
    actualizarIndicadores(index);
}

// Maneja el desplazamiento con la rueda del ratón en dispositivos de escritorio
window.addEventListener('wheel', (event) => {
    if (!isMobile) {
        currentSection = handleScroll(event, currentSection, sections.length);
        moveToSection(currentSection);
    }
});

// Maneja los eventos de toque en dispositivos móviles
window.addEventListener('touchstart', handleTouchStart, false);
window.addEventListener('touchmove', (event) => handleTouchMove(event, isMobile, currentSection, sections.length, moveToSection), false);

// Activa la primera sección al cargar la página
moveToSection(currentSection);

// Inicializa la escritura de palabras
escribirPalabra();

// Inicializa el buscador
iniciarBuscador();

// Inicializa y muestra las habilidades
mostrarLenguajes();

// Maneja el cambio de color en el header al hacer scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('fondo');
    } else {
        header.classList.remove('fondo');
    }
});


// Capturar los clics en los enlaces del navbar
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar el comportamiento por defecto del enlace

        // Obtener el id de la sección a la que se quiere desplazar
        const targetId = link.getAttribute('href').substring(1);
        const targetIndex = Array.from(sections).findIndex(section => section.id === targetId);

        if (targetIndex !== -1) {
            // Desplazar a la sección correspondiente
            currentSection = targetIndex;
            moveToSection(currentSection);
        }
    });
});

// Selecciona todos los enlaces que dirigen a una sección específica
const sectionLinks = document.querySelectorAll('a[href^="#section"]');

sectionLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar el comportamiento por defecto del enlace

        // Obtener el id de la sección destino desde el href
        const targetId = link.getAttribute('href').substring(1);

        // Encontrar la sección objetivo en la lista de secciones
        const targetIndex = Array.from(sections).findIndex(section => section.id === targetId);

        if (targetIndex !== -1) {
            // Desplazar a la sección objetivo
            currentSection = targetIndex;
            moveToSection(currentSection);
        }
    });
});

