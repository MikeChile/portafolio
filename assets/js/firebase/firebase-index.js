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
        id: '11',
        nombreProyecto: 'Solution Tek',
        descripcion: '"Solution Tek" es un sitio web desarrollado para la empresa dedicada a soluciones tecnologicas.',
        fechaCreacion: '2019-07-15',
        lenguajePrincipal: 'HTML',
        portada: 'job3',
        repositorioCodigo: 'https://www.solutiontek.cl/',
        repositorioVisual: 'https://www.solutiontek.cl/',
        tipoProyecto: 'trabajo realizado' // Nuevo campo
    },
    {
        id: '12',
        nombreProyecto: 'Omegacool',
        descripcion: '"Omegacool" es un sitio web desarrollado para la empresa dedicada a climatización.',
        fechaCreacion: '2020-01-20',
        lenguajePrincipal: 'HTML',
        portada: 'job4',
        repositorioCodigo: 'https://omegacool.cl/',
        repositorioVisual: 'https://omegacool.cl/',
        tipoProyecto: 'trabajo realizado' // Nuevo campo
    },
    {
        id: '13',
        nombreProyecto: 'Atencioarquitectura',
        descripcion: '"Atencioarquitectura" es un sitio web desarrollado para la empresa dedicada al area de la construcción.',
        fechaCreacion: '2020-02-25',
        lenguajePrincipal: 'HTML',
        portada: 'job5',
        repositorioCodigo: 'https://atencioarquitectura.cl/',
        repositorioVisual: 'https://atencioarquitectura.cl/',
        tipoProyecto: 'trabajo realizado' // Nuevo campo
    },
    {
        id: '14',
        nombreProyecto: 'Lmasalud',
        descripcion: '"Lmasalud" es un sitio web desarrollado para la profesional de la salud Leonor Monares.',
        fechaCreacion: '2020-07-05',
        lenguajePrincipal: 'PHP',
        portada: 'job6',
        repositorioCodigo: 'https://www.lmasalud.cl/new/',
        repositorioVisual: 'https://www.lmasalud.cl/new/',
        tipoProyecto: 'trabajo realizado' // Nuevo campo
    },
    {
        id: '15',
        nombreProyecto: 'Biblioteca Digital CCM',
        descripcion: '"Biblioteca Digital CCM" es una plataforma de gestión de libros realizada para el coelgio corazón de María',
        fechaCreacion: '2021-02-25',
        lenguajePrincipal: 'PHP',
        portada: 'job7',
        repositorioCodigo: 'https://bibliotecadigitalccm.cl/',
        repositorioVisual: 'https://bibliotecadigitalccm.cl/',
        tipoProyecto: 'trabajo realizado' // Nuevo campo
    },
    {
        id: '16',
        nombreProyecto: 'Funeraria Gerlach',
        descripcion: '"Funeraria Gerlach" es un sitio web desarrollado para la funeraria ubicada en Estación Central.',
        fechaCreacion: '2021-11-29',
        lenguajePrincipal: 'HTML',
        portada: 'job8',
        repositorioCodigo: 'https://funerariagerlach.cl/',
        repositorioVisual: 'https://funerariagerlach.cl/',
        tipoProyecto: 'trabajo realizado' // Nuevo campo
    },
    {
        id: '18',
        nombreProyecto: 'Hotel San Luis Copiapo',
        descripcion: '"Hotel San Luis Copiapo" es un sitio web desarrollado para la empresa hotelerea del norte.',
        fechaCreacion: '2022-01-02',
        lenguajePrincipal: 'JAVASCRIPT',
        portada: 'job9',
        repositorioCodigo: 'https://hotelsanluiscopiapo.cl/',
        repositorioVisual: 'https://hotelsanluiscopiapo.cl/',
        tipoProyecto: 'trabajo realizado' // Nuevo campo
    },
    {
        id: '19',
        nombreProyecto: 'Grupo IG',
        descripcion: '"Grupo IG" es un sitio web desarrollado para la empresa dedicada a Producción de eventos.',
        fechaCreacion: '2023-07-09',
        lenguajePrincipal: 'PHP',
        portada: 'job10',
        repositorioCodigo: 'https://grupoig.cl/',
        repositorioVisual: 'https://grupoig.cl/',
        tipoProyecto: 'trabajo realizado' // Nuevo campo
    },
    {
        id: '20',
        nombreProyecto: 'Farias Inversiones',
        descripcion: '"Farias Inversiones" es un sitio web desarrollado para la empresa dedicada a inversiones.',
        fechaCreacion: '2023-09-25',
        lenguajePrincipal: 'PHP',
        portada: 'job11',
        repositorioCodigo: 'https://fariasinversiones.cl/',
        repositorioVisual: 'https://fariasinversiones.cl/',
        tipoProyecto: 'trabajo realizado' // Nuevo campo
    },
    {
        id: '21',
        nombreProyecto: 'Check Online',
        descripcion: '"Check Online" es un sitio web desarrollado para una empresa de soluciones informaticas.',
        fechaCreacion: '2023-11-23',
        lenguajePrincipal: 'PHP',
        portada: 'job12',
        repositorioCodigo: 'https://checkonline.cl/tienda/',
        repositorioVisual: 'https://checkonline.cl/tienda/',
        tipoProyecto: 'trabajo realizado' // Nuevo campo
    },
    {
        id: '22',
        nombreProyecto: 'Walcom - Planes',
        descripcion: '"Walcom - Planes" es un sitio web desarrollado para la empresa de soluciones informaticas.',
        fechaCreacion: '2023-11-23',
        lenguajePrincipal: 'PHP',
        portada: 'job13',
        repositorioCodigo: 'https://walcom.cl/planes/',
        repositorioVisual: 'https://walcom.cl/planes/',
        tipoProyecto: 'trabajo realizado' // Nuevo campo
    },
    {
        id: '23',
        nombreProyecto: 'Techomania',
        descripcion: '"Techomania" es un sitio web desarrollado para la empresa dedicada a servicios de gasfiteria.',
        fechaCreacion: '2024-04-15',
        lenguajePrincipal: 'JAVASCRIPT',
        portada: 'job14',
        repositorioCodigo: 'https://www.techomania.cl/',
        repositorioVisual: 'https://www.techomania.cl/',
        tipoProyecto: 'trabajo realizado' // Nuevo campo
    }

];
*/
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

    /* CCM */
    /*addProjectSkill('9', '1'); /HTML */

    /* Funeraria Ibanez */
    /*addProjectSkill('10', '1'); /HTML */
    /*
        addProjectSkill('11', '1');
        addProjectSkill('12', '1');
        addProjectSkill('13', '1');
        addProjectSkill('14', '1');
        addProjectSkill('15', '1');
        addProjectSkill('16', '1');
        addProjectSkill('17', '1');
        addProjectSkill('18', '1');
        addProjectSkill('19', '1');
        addProjectSkill('20', '1');
        addProjectSkill('21', '1');
        addProjectSkill('22', '1');
        addProjectSkill('23', '1');
    
        addProjectSkill('11', '2');
        addProjectSkill('12', '2');
        addProjectSkill('13', '2');
        addProjectSkill('14', '2');
        addProjectSkill('15', '2');
        addProjectSkill('16', '2');
        addProjectSkill('17', '2');
        addProjectSkill('18', '2');
        addProjectSkill('19', '2');
        addProjectSkill('20', '2');
        addProjectSkill('21', '2');
        addProjectSkill('22', '2');
        addProjectSkill('23', '2');
    
        addProjectSkill('11', '3');
        addProjectSkill('12', '3');
        addProjectSkill('13', '3');
        addProjectSkill('14', '4');
        addProjectSkill('15', '4');
        addProjectSkill('16', '3');
        addProjectSkill('17', '3');
        addProjectSkill('18', '3');
        addProjectSkill('19', '4');
        addProjectSkill('20', '4');
        addProjectSkill('21', '4');
        addProjectSkill('22', '4');
        addProjectSkill('23', '3');
    */

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

