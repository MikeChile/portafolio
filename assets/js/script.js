// ===== PARTICULAS DE FONDO =====
const sections = document.querySelectorAll("section, header");
sections.forEach((sec) => {
    const canvas = document.createElement("canvas");
    canvas.classList.add("particles-bg");
    sec.prepend(canvas);

    const ctx = canvas.getContext("2d");
    let particles = [];
    let w, h;

    function resizeCanvas() {
        w = canvas.width = sec.offsetWidth;
        h = canvas.height = sec.offsetHeight;
        createParticles();
    }

    function createParticles() {
        particles = [];
        const count = Math.floor(w / 15);
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 2 + 0.5,
                dx: (Math.random() - 0.5) * 0.5,
                dy: (Math.random() - 0.5) * 0.5,
                alpha: Math.random() * 0.5 + 0.2,
            });
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, w, h);
        for (let p of particles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
            ctx.fill();

            p.x += p.dx;
            p.y += p.dy;

            if (p.x < 0 || p.x > w) p.dx *= -1;
            if (p.y < 0 || p.y > h) p.dy *= -1;
        }
        requestAnimationFrame(drawParticles);
    }

    resizeCanvas();
    drawParticles();
    window.addEventListener("resize", resizeCanvas);
});



//CARGAR MÁS PROYECTOS
document.addEventListener("DOMContentLoaded", async () => {
    const grid = document.getElementById("proyectosGrid");
    const btnLoadMore = document.getElementById("loadMore");
    let proyectos = [];
    let mostrados = 0;
    const porPagina = 4;

    // Obtener ícono según tecnología
    function obtenerIcono(tech) {
        const iconos = {
            HTML: '<i class="bx bxl-html5"></i>',
            CSS: '<i class="bx bxl-css3"></i>',
            JavaScript: '<i class="bx bxl-javascript"></i>',
            React: '<i class="bx bxl-react"></i>',
            Node: '<i class="bx bxl-nodejs"></i>',
            "Node.js": '<i class="bx bxl-nodejs"></i>',
            PHP: '<i class="bx bxl-php"></i>',
            MySQL: '<i class="bx bxs-data"></i>',
            MongoDB: '<i class="bx bxl-mongodb"></i>',
            Bootstrap: '<i class="bx bxl-bootstrap"></i>',
            MDBootstrap: '<i class="bx bxl-bootstrap"></i>',
            WordPress: '<i class="bx bxl-wordpress"></i>',
            Firebase: '<i class="bx bxl-firebase"></i>',
            Tailwind: '<i class="bx bxl-tailwind-css"></i>',
            Vue: '<i class="bx bxl-vuejs"></i>',
            Laravel: '<i class="bx bxl-laravel"></i>',
            Next: '<i class="bx bxl-nextjs"></i>',
            "Next.js": '<i class="bx bxl-nextjs"></i>'
        };
        return iconos[tech] || `<span class="tech-text">${tech}</span>`;
    }

    // Mostrar proyectos en el grid
    function mostrarMas() {
        const siguiente = proyectos.slice(mostrados, mostrados + porPagina);

        siguiente.forEach((p) => {
            const card = document.createElement("div");
            card.classList.add("proyecto-card", "fade-in");

            card.innerHTML = `
                <div class="proyecto-inner">
                    <div class="proyecto-front">
                        <img src="${p.imagen}" alt="${p.titulo}">
                    </div>
                    <div class="proyecto-back">
                        <h3>${p.titulo}</h3>
                        <p>${p.descripcion}</p>
                        <p class="fecha">${new Date(p.fecha).getFullYear()}</p>
                        <div class="tech-icons">
                            ${p.tecnologias.map(t => obtenerIcono(t)).join("")}
                        </div>
                        <a href="${p.demo}" target="_blank" class="btn-neon-small">Ver Demo</a>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        mostrados += siguiente.length;

        // Ocultar el botón si ya no hay más
        if (mostrados >= proyectos.length) {
            btnLoadMore.style.display = "none";
        }
    }

    // Cargar proyectos desde el JSON local
    async function cargarProyectos() {
        try {
            const respuesta = await fetch("./Assets/api/proyectos.json");
            const data = await respuesta.json();

            // ✅ Accedemos a data.proyectos
            proyectos = data.proyectos;

            if (!Array.isArray(proyectos)) {
                throw new Error("El archivo JSON no contiene un array válido en 'proyectos'");
            }

            mostrarMas(); // Mostrar los primeros
        } catch (error) {
            console.error("Error al cargar proyectos:", error);
        }
    }

    btnLoadMore.addEventListener("click", mostrarMas);
    cargarProyectos();
});

//LUZ NEON DE EL DOCKBAR
document.addEventListener("DOMContentLoaded", () => {
    const dock = document.querySelector(".dock-navbar");
    const intervalo = 5000; // milisegundos (configurable)

    setInterval(() => {
        dock.classList.add("active");
        setTimeout(() => dock.classList.remove("active"), 4000); // duración del glow
    }, intervalo);
});

//SUBTITULOS
document.addEventListener("DOMContentLoaded", () => {
    const textos = [
        "Desarrollador Web",
        "Analista de Datos",
        "Desarrollador Fullstack",
        "Machine Learning Engineer",
        "Creador Digital",
        "Administrador de Base de datos"
    ];

    const elemento = document.getElementById("texto-dinamico");
    const cursor = document.querySelector(".cursor");
    let indice = 0;
    let escribiendo = true;

    const escribirTexto = (texto, callback) => {
        let i = 0;
        elemento.classList.add("glitch");
        const intervalo = setInterval(() => {
            elemento.textContent = texto.slice(0, i++);
            if (i > texto.length) {
                clearInterval(intervalo);
                elemento.classList.remove("glitch");
                setTimeout(callback, 1500); // tiempo visible antes de borrar
            }
        }, 80); // velocidad de escritura
    };

    const borrarTexto = (callback) => {
        let texto = elemento.textContent;
        elemento.classList.add("glitch");
        const intervalo = setInterval(() => {
            texto = texto.slice(0, -1);
            elemento.textContent = texto;
            if (texto.length === 0) {
                clearInterval(intervalo);
                elemento.classList.remove("glitch");
                setTimeout(callback, 300);
            }
        }, 40); // velocidad de borrado
    };

    const cicloTextos = () => {
        escribirTexto(textos[indice], () => {
            borrarTexto(() => {
                indice = (indice + 1) % textos.length;
                cicloTextos();
            });
        });
    };

    cicloTextos();
});

//CONTEO DE DATOS
document.addEventListener("DOMContentLoaded", () => {
    const datosSection = document.querySelector("#datos");
    const cajas = document.querySelectorAll(".cajaDato .num");
    let started = false; // evita que se repita

    const startCount = (el, target) => {
        let count = 0;
        const speed = 50; // velocidad del incremento (ms)
        const increment = Math.ceil(target / 50); // control del salto de número

        const updateCount = () => {
            count += increment;
            if (count >= target) {
                count = target;
                clearInterval(timer);
            }
            el.textContent = count + (target === 5 ? "+" : ""); // agrega "+" solo al primero
        };

        const timer = setInterval(updateCount, speed);
    };

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !started) {
                    started = true;
                    // efecto de aparición
                    document.querySelectorAll(".cajaDato").forEach(caja => {
                        caja.classList.add("visible");
                    });
                    // iniciar conteo
                    cajas.forEach(num => {
                        const finalValue = parseInt(num.textContent);
                        num.textContent = "0";
                        startCount(num, finalValue);
                    });
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(datosSection);
});

// IR ARRIBA DESDE EL FOOTER
document.getElementById('btnIrArriba').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

//RELOJ
// Función para actualizar hora y fecha
function actualizarReloj() {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit', hour12: false });
    const fecha = `${String(ahora.getDate()).padStart(2, '0')}/${String(ahora.getMonth() + 1).padStart(2, '0')}/${ahora.getFullYear()}`;

    document.getElementById('relojHora').textContent = hora;
    document.getElementById('relojFecha').textContent = fecha;
}

// Actualiza cada segundo
setInterval(actualizarReloj, 1000);
actualizarReloj();

//SCROLL
const enlacesDock = document.querySelectorAll('.dock-navbar a[href^="#"]');

enlacesDock.forEach(enlace => {
    enlace.addEventListener('click', function (e) {
        e.preventDefault(); // evita el salto instantáneo
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',  // efecto suave
                block: 'start'       // al inicio de la sección
            });
        }
    });
});
