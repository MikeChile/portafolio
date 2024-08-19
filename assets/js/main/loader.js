window.addEventListener("wheel", function (e) {
    if (e.deltaY !== 0) {
        // Desplazamiento horizontal en lugar de vertical
        window.scrollBy({
            left: e.deltaY * 3, // Puedes ajustar la velocidad del scroll
            behavior: "smooth"
        });
    }
});