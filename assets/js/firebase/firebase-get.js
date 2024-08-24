import { getDatabase, ref, get, child } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js';
import { database } from './firebase-config.js';  // Importa la instancia de base de datos

// Obtener proyectos
export function getProjects() {
    const db = database; // Usa la instancia importada
    const projectsRef = ref(db, 'projects');
    return get(projectsRef)
        .then(snapshot => {
            if (snapshot.exists()) {
                return snapshot; // Devuelve el snapshot
            } else {
                console.log("No hay datos de proyectos disponibles.");
                return null;
            }
        })
        .catch(error => {
            console.error("Error al obtener los proyectos:", error);
        });
}

// Obtener habilidades
export function getSkills() {
    const db = database; // Usa la instancia importada
    const skillsRef = ref(db, 'skills');
    return get(skillsRef)
        .then(snapshot => {
            if (snapshot.exists()) {
                return snapshot; // Devuelve el snapshot
            } else {
                console.log("No hay datos de habilidades disponibles.");
                return null;
            }
        })
        .catch(error => {
            console.error("Error al obtener las habilidades:", error);
        });
}

// Función para obtener todas las relaciones entre proyectos y habilidades
export function getProjectSkills() {
    const db = database; // Usa la instancia importada
    const dbRef = ref(db);
    return get(child(dbRef, 'projectSkills'))
        .then(snapshot => {
            if (snapshot.exists()) {
                return snapshot; // Devuelve el snapshot
            } else {
                console.log("No hay datos de relaciones proyecto-habilidad disponibles.");
                return null;
            }
        })
        .catch(error => {
            console.error("Error al obtener las relaciones proyecto-habilidad:", error);
        });
}
