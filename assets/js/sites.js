import { getProjects } from './firebase/firebase-get.js';
import { displayProjects } from './firebase/firebase-display.js'; // Asegúrate de que la ruta sea correcta

// Función para mostrar proyectos de tipo "sitio web"
async function showWebsiteProjects() {
    try {
        //console.log('Obteniendo proyectos...');
        const snapshot = await getProjects();

        if (snapshot && snapshot.exists()) {
            const projects = snapshot.val();
            //console.log('Proyectos obtenidos:', projects);

            const websiteProjects = Object.values(projects).filter(project => {
                //console.log('Filtrando proyecto:', project);
                return project.tipoProyecto && project.tipoProyecto.toLowerCase() === 'sitio web';
            });

            //console.log('Proyectos de sitio web filtrados:', websiteProjects);

            displayProjects(websiteProjects); // Llamada correcta a displayProjects
        } else {
            //document.getElementById('projectsContainerSite').innerHTML = 'No hay proyectos disponibles.';
        }
    } catch (error) {
        console.error('Error al obtener los proyectos:', error);
        document.getElementById('projectsContainerSite').innerHTML = 'Error al cargar los proyectos.';
    }
}


// Ejecutar la función para mostrar proyectos de sitios web
showWebsiteProjects();
