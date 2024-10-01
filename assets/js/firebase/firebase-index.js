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
        id: '28',
        nombreProyecto: 'Parallax',
        descripcion: 'Plantilla web con efecto parallax',
        fechaCreacion: '2019-11-07',
        lenguajePrincipal: 'JAVASCRIPT',
        portada: 'site01',
        repositorioCodigo: 'https://github.com/MikeChile/portafolio/tree/main/pages/sites/page1_parallax/',
        repositorioVisual: 'https://mikechile.github.io/portafolio/pages/sites/page1_parallax/',
        tipoProyecto: 'sitio web' // Nuevo campo
    },
    {
        id: '29',
        nombreProyecto: 'Artist',
        descripcion: 'Plantilla web con fondo de video y funciones para artista',
        fechaCreacion: '2021-11-08',
        lenguajePrincipal: 'JAVASCRIPT',
        portada: 'site02',
        repositorioCodigo: 'https://github.com/MikeChile/portafolio/tree/main/pages/sites/page2_artist/',
        repositorioVisual: 'https://mikechile.github.io/portafolio/pages/sites/page2_artist/',
        tipoProyecto: 'sitio web' // Nuevo campo
    },
    {
        id: '30',
        nombreProyecto: 'News',
        descripcion: 'Plantilla web con tematica de noticias',
        fechaCreacion: '2021-11-13',
        lenguajePrincipal: 'JAVASCRIPT',
        portada: 'site03',
        repositorioCodigo: 'https://github.com/MikeChile/portafolio/tree/main/pages/sites/page3_news/',
        repositorioVisual: 'https://mikechile.github.io/portafolio/pages/sites/page3_news/',
        tipoProyecto: 'sitio web' // Nuevo campo
    },
    {
        id: '31',
        nombreProyecto: 'Films',
        descripcion: 'Plantilla web con tematica de plataforma de peliculas',
        fechaCreacion: '2020-04-07',
        lenguajePrincipal: 'JAVASCRIPT',
        portada: 'site04',
        repositorioCodigo: 'https://github.com/MikeChile/portafolio/tree/main/pages/sites/page4_films/',
        repositorioVisual: 'https://mikechile.github.io/portafolio/pages/sites/page4_films/',
        tipoProyecto: 'sitio web' // Nuevo campo
    },
    {
        id: '32',
        nombreProyecto: 'Landing Page',
        descripcion: 'Plantilla web de una landing page básica',
        fechaCreacion: '2021-07-15',
        lenguajePrincipal: 'JAVASCRIPT',
        portada: 'site05',
        repositorioCodigo: 'https://github.com/MikeChile/portafolio/tree/main/pages/sites/page5_landing_page/',
        repositorioVisual: 'https://mikechile.github.io/portafolio/pages/sites/page5_landing_page/',
        tipoProyecto: 'sitio web' // Nuevo campo
    },
    {
        id: '33',
        nombreProyecto: 'Waves',
        descripcion: 'Plantilla web con efecto de olas en movimientos',
        fechaCreacion: '2022-12-10',
        lenguajePrincipal: 'JAVASCRIPT',
        portada: 'site06',
        repositorioCodigo: 'https://github.com/MikeChile/portafolio/tree/main/pages/sites/page6_waves/',
        repositorioVisual: 'https://mikechile.github.io/portafolio/pages/sites/page6_waves/',
        tipoProyecto: 'sitio web' // Nuevo campo
    },
    {
        id: '34',
        nombreProyecto: 'Corp',
        descripcion: 'Plantilla web corporativa',
        fechaCreacion: '2023-04-05',
        lenguajePrincipal: 'JAVASCRIPT',
        portada: 'site07',
        repositorioCodigo: 'https://github.com/MikeChile/portafolio/tree/main/pages/sites/page7_corp/',
        repositorioVisual: 'https://mikechile.github.io/portafolio/pages/sites/page7_corp/',
        tipoProyecto: 'sitio web' // Nuevo campo
    },
    {
        id: '35',
        nombreProyecto: 'Waves 2',
        descripcion: 'Plantilla web con efectos de olas fijas',
        fechaCreacion: '2023-11-30',
        lenguajePrincipal: 'JAVASCRIPT',
        portada: 'site08',
        repositorioCodigo: 'https://github.com/MikeChile/portafolio/tree/main/pages/sites/page8_waves2/',
        repositorioVisual: 'https://mikechile.github.io/portafolio/pages/sites/page8_waves2/',
        tipoProyecto: 'sitio web' // Nuevo campo
    }

];*/

// Función para inicializar la aplicación y obtener los datos
function init() {
    // Agregar proyectos a Firebase
    /*projectsData.forEach(project => {
        addProject(project.id, project.nombreProyecto, project.descripcion, project.fechaCreacion, project.lenguajePrincipal, project.portada, project.repositorioCodigo, project.repositorioVisual, project.tipoProyecto);
    });*/
    /*
        addProjectSkill('28', '1');
        addProjectSkill('28', '2');
        addProjectSkill('28', '3');
    
        addProjectSkill('29', '1');
        addProjectSkill('29', '2');
        addProjectSkill('29', '3');
    
        addProjectSkill('30', '1');
        addProjectSkill('30', '2');
        addProjectSkill('30', '3');
    
        addProjectSkill('31', '1');
        addProjectSkill('31', '2');
        addProjectSkill('31', '3');
    
        addProjectSkill('32', '1');
        addProjectSkill('32', '2');
        addProjectSkill('32', '3');
    
        addProjectSkill('33', '1');
        addProjectSkill('33', '2');
        addProjectSkill('33', '3');
    
        addProjectSkill('34', '1');
        addProjectSkill('34', '2');
        addProjectSkill('34', '3');
    
        addProjectSkill('35', '1');
        addProjectSkill('35', '2');
        addProjectSkill('35', '3');
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

