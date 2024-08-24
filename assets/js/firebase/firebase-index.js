// assets/js/firebase/firebase-index.js

import { addSkill, addProject, addProjectSkill } from './firebase-add.js';
import { getSkills, getProjects, getProjectSkills } from './firebase-get.js';
import { displayProjectsWithSkills } from './firebase-display.js';
/*
estructura actual firebase
portafolio-mike-80686
│
├── skills
│   ├── 1
│   │   ├── id: "1"
│   │   ├── nombre: "JavaScript"
│   │   └── ...
│   └── ...
│
├── projects
│   ├── 1
│   │   ├── id: "1"
│   │   ├── lenguaje_principal: "JavaScript"
│   │   └── ...
│   └── ...
│
└── projectSkills
    ├── 1
    │   ├── skillId: "1"
    │   └── projectId: "1"
    ├── 2
    │   ├── skillId: "2"
    │   └── projectId: "1"
    ├── 3
    │   ├── skillId: "3"
    │   └── projectId: "3"
    └── ...
*/


// Datos de los proyectos a agregar
/*const projectsData = [
    {
        id: '1',
        nombreProyecto: 'Reserva Hotelera',
        descripcion: 'Crea reservas de hora para un hotel de manera facil y personalizada.',
        fechaCreacion: '2024-08-07',
        lenguajePrincipal: 'JavaScript',
        portada: 'sec5',
        repositorioCodigo: 'https://github.com/MikeChile/reserva_hotelera.git',
        repositorioVisual: 'https://mikechile.github.io/reserva_hotelera/',
        tipoProyecto: 'funcion' // Nuevo campo
    },
    {
        id: '2',
        nombreProyecto: 'Gestión de Libros',
        descripcion: 'Organiza y gestiona tu biblioteca personal con facilidad. Agrega, edita y elimina libros, y lleva un registro de tus favoritos.',
        fechaCreacion: '2024-08-06',
        lenguajePrincipal: 'JavaScript',
        portada: 'sec4',
        repositorioCodigo: 'https://github.com/MikeChile/gestion_libros',
        repositorioVisual: 'https://mikechile.github.io/gestion_libros/',
        tipoProyecto: 'funcion' // Nuevo campo
    },
    {
        id: '3',
        nombreProyecto: 'Lista de Tareas',
        descripcion: 'Crea y gestiona tus tareas diarias con esta increible función.',
        fechaCreacion: '2024-08-05',
        lenguajePrincipal: 'JavaScript',
        portada: 'sec3',
        repositorioCodigo: 'https://github.com/MikeChile/tareas',
        repositorioVisual: 'https://mikechile.github.io/tareas/',
        tipoProyecto: 'funcion' // Nuevo campo
    },
    {
        id: '4',
        nombreProyecto: 'gestion empleado',
        descripcion: 'Administra información de empleados, incluyendo datos personales, salarios y departamentos.',
        fechaCreacion: '2024-08-02',
        lenguajePrincipal: 'JavaScript',
        portada: 'sec2',
        repositorioCodigo: 'https://github.com/MikeChile/gestion_empleados',
        repositorioVisual: 'https://mikechile.github.io/gestion_empleados/',
        tipoProyecto: 'funcion' // Nuevo campo
    },
    {
        id: '5',
        nombreProyecto: 'Calculadora',
        descripcion: 'Realiza operaciones matemáticas simples (suma, resta, multiplicación, división) con una interfaz fácil de usar.',
        fechaCreacion: '2024-07-31',
        lenguajePrincipal: 'JavaScript',
        portada: 'sec1',
        repositorioCodigo: 'https://github.com/MikeChile/calculadora',
        repositorioVisual: 'https://mikechile.github.io/calculadora/',
        tipoProyecto: 'funcion' // Nuevo campo
    },
    // Nuevos proyectos
    {
        id: '6',
        nombreProyecto: 'Juego de Dados',
        descripcion: 'Juego de dados para 2 o más jugadores.',
        fechaCreacion: '2024-08-08',
        lenguajePrincipal: 'JavaScript',
        portada: 'juego-dados',
        repositorioCodigo: 'https://github.com/MikeChile/dados.git',
        repositorioVisual: 'https://mikechile.github.io/dados/',
        tipoProyecto: 'juego' // Nuevo campo
    },
    {
        id: '7',
        nombreProyecto: 'Pizzeria',
        descripcion: 'Pizzería Panucci ofrece auténticas pizzas artesanales con ingredientes frescos y una amplia variedad de sabores para todos los gustos.',
        fechaCreacion: '2024-08-14',
        lenguajePrincipal: 'JavaScript',
        portada: 'imgc2',
        repositorioCodigo: 'https://github.com/MikeChile/pizzeria',
        repositorioVisual: 'https://mikechile.github.io/pizzeria/',
        tipoProyecto: 'sitio web' // Nuevo campo
    },
    {
        id: '8',
        nombreProyecto: 'MikeStore',
        descripcion: '"Mike Store" es una tienda en línea que vende productos variados, con carrito de compras y opciones de pago.',
        fechaCreacion: '2024-08-09',
        lenguajePrincipal: 'JavaScript',
        portada: 'imgc1',
        repositorioCodigo: 'https://github.com/MikeChile/MikeStore',
        repositorioVisual: 'https://mikechile.github.io/MikeStore/',
        tipoProyecto: 'sitio web' // Nuevo campo
    }
];*/

// Función para inicializar la aplicación y obtener los datos
function init() {
    // Agregar proyectos a Firebase
    /*projectsData.forEach(project => {
        addProject(project.id, project.nombreProyecto, project.descripcion, project.fechaCreacion, project.lenguajePrincipal, project.portada, project.repositorioCodigo, project.repositorioVisual, project.tipoProyecto);
    });*/

    // Ejemplo de agregar relaciones entre proyectos y habilidades (opcional)    
    /*addProjectSkill('1', '1');
    addProjectSkill('1', '2');
    addProjectSkill('1', '3');
    addProjectSkill('2', '1');
    addProjectSkill('2', '2');
    addProjectSkill('2', '3');
    addProjectSkill('3', '1');
    addProjectSkill('3', '2');
    addProjectSkill('3', '3');
    addProjectSkill('4', '1');
    addProjectSkill('4', '2');
    addProjectSkill('4', '3');
    addProjectSkill('5', '1');
    addProjectSkill('5', '2');
    addProjectSkill('5', '3');
    addProjectSkill('6', '1');
    addProjectSkill('6', '2');
    addProjectSkill('6', '3');
    addProjectSkill('7', '1');
    addProjectSkill('7', '2');
    addProjectSkill('7', '3');
    addProjectSkill('8', '1');
    addProjectSkill('8', '2');
    addProjectSkill('8', '3');*/

    // Obtener y mostrar proyectos con habilidades
    getProjects().then((projectsSnapshot) => {
        if (projectsSnapshot.exists()) {
            const projects = projectsSnapshot.val();
            getProjectSkills().then((projectSkillsSnapshot) => {
                if (projectSkillsSnapshot.exists()) {
                    const projectSkills = projectSkillsSnapshot.val();
                    getSkills().then((skillsSnapshot) => {
                        if (skillsSnapshot.exists()) {
                            const skills = skillsSnapshot.val();
                            displayProjectsWithSkills(projects, projectSkills, skills);
                        } else {
                            console.log("No hay datos de habilidades disponibles.");
                        }
                    }).catch((error) => {
                        console.error("Error al obtener los datos de habilidades:", error);
                    });
                } else {
                    console.log("No hay datos de habilidades de proyecto disponibles.");
                }
            }).catch((error) => {
                console.error("Error al obtener los datos de habilidades de proyecto:", error);
            });
        } else {
            console.log("No hay datos de proyectos disponibles.");
        }
    }).catch((error) => {
        console.error("Error al obtener los datos de proyectos:", error);
    });
}

// Ejecutar la inicialización
init();

