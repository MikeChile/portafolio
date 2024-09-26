import { getProjects } from './firebase/firebase-get.js';
import { displayJobs } from './firebase/firebase-display.js'; // Asegúrate de que la ruta sea correcta

// Función para mostrar proyectos de una sección específica
async function jobsProjects() {
    try {
        console.log('Obteniendo proyectos de trabajos realizados...');
        const snapshot = await getProjects();

        if (snapshot && snapshot.exists()) {
            // Convertir el snapshot a un objeto
            const projects = snapshot.val();
            console.log('Trabajos realizados:', projects);

            // Filtrar los proyectos según la sección deseada (ajustar la sección a filtrar)
            const sectionProjects = Object.values(projects).filter(project => {
                console.log('Filtrando proyecto:', project); // Verificar cada proyecto
                return project.tipoProyecto && project.tipoProyecto.toLowerCase() === 'trabajo realizado'; // Cambia 'deseada' por la sección que deseas filtrar
            });

            console.log('Trabajos realizados filtrados:', sectionProjects); // Verificar los proyectos filtrados

            if (sectionProjects.length > 0) {
                displayJobs(sectionProjects); // Llamar a la función correcta
            } else {
                document.getElementById('jobsContainerSection').innerHTML = 'No se encontraron trabajos realizados.';
            }
        } else {
            document.getElementById('jobsContainerSection').innerHTML = 'No hay proyectos disponibles.';
        }
    } catch (error) {
        console.error('Error al obtener los proyectos de trabajos realizados:', error);
        document.getElementById('jobsContainerSection').innerHTML = 'Error al cargar los proyectos.';
    }
}

// Ejecutar la función para mostrar proyectos por sección
jobsProjects();
