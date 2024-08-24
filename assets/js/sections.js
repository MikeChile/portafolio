import { getProjects } from './firebase/firebase-get.js';
import { displayProjectsSections } from './firebase/firebase-display.js'; // Asegúrate de que la ruta sea correcta

// Función para mostrar proyectos de una sección específica
async function showSectionProjects() {
    try {
        console.log('Obteniendo proyectos...');
        const snapshot = await getProjects();

        if (snapshot && snapshot.exists()) {
            // Convertir el snapshot a un objeto
            const projects = snapshot.val();
            console.log('Proyectos obtenidos:', projects);

            // Filtrar los proyectos según la sección deseada (ajustar la sección a filtrar)
            const sectionProjects = Object.values(projects).filter(project => {
                console.log('Filtrando proyecto:', project); // Verificar cada proyecto
                return project.seccion && project.seccion.toLowerCase() === 'deseada'; // Cambia 'deseada' por la sección que deseas filtrar
            });

            console.log('Proyectos por sección filtrados:', sectionProjects); // Verificar los proyectos filtrados

            if (sectionProjects.length > 0) {
                displayProjectsSections(sectionProjects); // Llamar a la función correcta
            } else {
                document.getElementById('projectsContainerSection').innerHTML = 'No se encontraron proyectos para esta sección.';
            }
        } else {
            document.getElementById('projectsContainerSection').innerHTML = 'No hay proyectos disponibles.';
        }
    } catch (error) {
        console.error('Error al obtener los proyectos:', error);
        document.getElementById('projectsContainerSection').innerHTML = 'Error al cargar los proyectos.';
    }
}

// Ejecutar la función para mostrar proyectos por sección
showSectionProjects();
