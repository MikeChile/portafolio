import { getProjects } from './firebase/firebase-get.js';
import { displayProjectsGames } from './firebase/firebase-display.js'; // Asegúrate de que la ruta sea correcta

// Función para mostrar proyectos de tipo "juego"
async function showGameProjects() {
    try {
        console.log('Obteniendo proyectos...');
        const snapshot = await getProjects();

        if (snapshot && snapshot.exists()) {
            // Convertir el snapshot a un objeto
            const projects = snapshot.val();
            console.log('Proyectos obtenidos:', projects);

            // Filtrar los proyectos cuyo tipoProyecto sea "juego"
            const gameProjects = Object.values(projects).filter(project => {
                console.log('Filtrando proyecto:', project); // Verificar cada proyecto
                return project.tipoProyecto && project.tipoProyecto.toLowerCase() === 'juego';
            });

            console.log('Proyectos de juegos filtrados:', gameProjects); // Verificar los proyectos filtrados

            if (gameProjects.length > 0) {
                displayProjectsGames(gameProjects); // Llamar a la función correcta
            } else {
                document.getElementById('projectsContainerGame').innerHTML = 'No se encontraron proyectos de juegos.';
            }
        } else {
            document.getElementById('projectsContainerGame').innerHTML = 'No hay proyectos disponibles.';
        }
    } catch (error) {
        console.error('Error al obtener los proyectos:', error);
        document.getElementById('projectsContainerGame').innerHTML = 'Error al cargar los proyectos.';
    }
}

// Ejecutar la función para mostrar proyectos de juegos
showGameProjects();
