import { getProjects } from './firebase/firebase-get.js';
import { displayProjectsFunctions } from './firebase/firebase-display.js'; // Asegúrate de que la ruta sea correcta

// Función para mostrar proyectos de tipo "función"
async function showFunctionProjects() {
    try {
        console.log('Obteniendo proyectos...');
        const snapshot = await getProjects();

        if (snapshot && snapshot.exists()) {
            // Convertir el snapshot a un objeto
            const projects = snapshot.val();
            console.log('Proyectos obtenidos:', projects);

            // Filtrar los proyectos cuyo tipoProyecto sea "función"
            const functionProjects = Object.values(projects).filter(project => {
                console.log('Filtrando proyecto:', project); // Verificar cada proyecto
                return project.tipoProyecto && project.tipoProyecto.toLowerCase() === 'funcion';
            });

            console.log('Proyectos de funciones filtrados:', functionProjects); // Verificar los proyectos filtrados

            if (functionProjects.length > 0) {
                displayProjectsFunctions(functionProjects); // Llamar a la función correcta
            } else {
                document.getElementById('projectsContainerFunction').innerHTML = 'No se encontraron proyectos de funciones.';
            }
        } else {
            document.getElementById('projectsContainerFunction').innerHTML = 'No hay proyectos disponibles.';
        }
    } catch (error) {
        console.error('Error al obtener los proyectos:', error);
        document.getElementById('projectsContainerFunction').innerHTML = 'Error al cargar los proyectos.';
    }
}

// Ejecutar la función para mostrar proyectos de funciones
showFunctionProjects();
