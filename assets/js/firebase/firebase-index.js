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
        id: '24',
        nombreProyecto: 'Sidebar 01',
        descripcion: 'Barra lateral simple con css',
        fechaCreacion: '2024-09-27',
        lenguajePrincipal: 'CSS',
        portada: 'secc01',
        repositorioCodigo: 'https://github.com/MikeChile/portafolio/pages/secciones/sidebar01/',
        repositorioVisual: 'https://mikechile.github.io/portafolio/pages/secciones/sidebar01/',
        tipoProyecto: 'seccion' // Nuevo campo
    },
    {
        id: '25',
        nombreProyecto: 'Sidebar 02',
        descripcion: 'Barra lateral simple con css',
        fechaCreacion: '2024-09-27',
        lenguajePrincipal: 'CSS',
        portada: 'secc02',
        repositorioCodigo: 'https://github.com/MikeChile/portafolio/pages/secciones/sidebar02/',
        repositorioVisual: 'https://mikechile.github.io/portafolio/pages/secciones/sidebar02/',
        tipoProyecto: 'seccion' // Nuevo campo
    },
    {
        id: '26',
        nombreProyecto: 'Sidebar 03 Mode Dark',
        descripcion: 'Barra lateral con modo de cambio de fondo oscuro y claro',
        fechaCreacion: '2024-09-27',
        lenguajePrincipal: 'JAVASCRIPT',
        portada: 'secc03',
        repositorioCodigo: 'https://github.com/MikeChile/portafolio/pages/secciones/sidebar03_mode_dark/',
        repositorioVisual: 'https://mikechile.github.io/portafolio/pages/secciones/sidebar03_mode_dark/',
        tipoProyecto: 'seccion' // Nuevo campo
    },
    {
        id: '27',
        nombreProyecto: 'Sidebar 04 Rotatorio',
        descripcion: 'Barra lateral con efecto rotatorio',
        fechaCreacion: '2024-09-27',
        lenguajePrincipal: 'JAVASCRIPT',
        portada: 'secc04',
        repositorioCodigo: 'https://github.com/MikeChile/portafolio/pages/secciones/sidebar04_rotatorio/',
        repositorioVisual: 'https://mikechile.github.io/portafolio/pages/secciones/sidebar04_rotatorio/',
        tipoProyecto: 'seccion' // Nuevo campo
    }

];*/

// Función para inicializar la aplicación y obtener los datos
function init() {
    // Agregar proyectos a Firebase
    /*projectsData.forEach(project => {
        addProject(project.id, project.nombreProyecto, project.descripcion, project.fechaCreacion, project.lenguajePrincipal, project.portada, project.repositorioCodigo, project.repositorioVisual, project.tipoProyecto);
    });*/

    /*addProjectSkill('25', '1');
    addProjectSkill('25', '2');
    addProjectSkill('26', '1');
    addProjectSkill('26', '2');
    addProjectSkill('27', '1');
    addProjectSkill('27', '2');
    addProjectSkill('26', '3');
    addProjectSkill('27', '3');*/
    /* CCM */
    /*addProjectSkill('9', '1'); /HTML */

    /* Funeraria Ibanez */
    /*addProjectSkill('10', '1'); /HTML */


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

