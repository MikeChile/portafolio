// Variables globales
let palabras = ["Desarrollador", "Diseñador", "Creativo"];
let indice = 0;
const tiempo = 1000;

// Función para escribir y eliminar palabras
export function escribirPalabra() {
    const palabra = palabras[indice];
    const span = document.querySelector('.typing-2');
    const simbolo = document.querySelector('.simbolo-tipeo');
    let texto = '';

    for (let i = 0; i < palabra.length; i++) {
        setTimeout(() => {
            texto += palabra[i];
            span.innerHTML = texto;
        }, i * 100);
    }

    setTimeout(() => {
        simbolo.classList.add('parpadeo');

        for (let i = palabra.length - 1; i >= 0; i--) {
            setTimeout(() => {
                span.innerHTML = palabra.slice(0, i);
            }, (palabra.length - i) * 100);
        }

        setTimeout(() => {
            simbolo.classList.remove('parpadeo');
            indice = (indice + 1) % palabras.length;
            escribirPalabra();
        }, palabra.length * 100 + 1000);
    }, tiempo);
}
