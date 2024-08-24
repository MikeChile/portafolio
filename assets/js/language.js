import { ref, get, child } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
import { database } from './firebase/firebase-config.js';
import { displayProjectsWithSkills } from './firebase/firebase-display.js'; // Asegúrate de que la ruta sea correcta

// Función para obtener el valor de un parámetro en la URL
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Obtener el valor del parámetro 'leng'
const lenguaje = getParameterByName('leng');

// Mostrar el valor del parámetro en el h1
document.getElementById('lenguajeTitulo').textContent = lenguaje ? `Lenguaje: ${lenguaje}` : 'Lenguaje no especificado';

// Función para obtener y mostrar los proyectos relacionados con el lenguaje
async function showProjectsByLanguage(lenguaje) {
    const dbRef = ref(database);

    try {
        // Primero obtener la skill correspondiente al lenguaje
        const skillsSnapshot = await get(child(dbRef, 'skills'));
        if (skillsSnapshot.exists()) {
            const skills = skillsSnapshot.val();
            let skillId = null;

            // Buscar el ID de la skill que corresponde al lenguaje
            for (const id in skills) {
                if (skills[id].nombre.toLowerCase() === lenguaje.toLowerCase()) {
                    skillId = skills[id].id;  // Obtener el ID de la habilidad
                    break;
                }
            }

            if (skillId) {
                // Obtener las relaciones entre proyectos y habilidades
                const projectSkillsSnapshot = await get(child(dbRef, 'projectSkills'));
                if (projectSkillsSnapshot.exists()) {
                    const projectSkills = projectSkillsSnapshot.val();
                    const projectIds = [];

                    // Encontrar los IDs de los proyectos que tienen la habilidad
                    for (const key in projectSkills) {
                        if (projectSkills[key].skillId == skillId) {
                            projectIds.push(projectSkills[key].projectId);
                        }
                    }

                    // Obtener los proyectos que coinciden con los IDs encontrados
                    if (projectIds.length > 0) {
                        const projectsSnapshot = await get(child(dbRef, 'projects'));
                        if (projectsSnapshot.exists()) {
                            const projects = projectsSnapshot.val();
                            const filteredProjects = {};

                            // Filtrar los proyectos que tienen el ID en projectIds
                            projectIds.forEach(id => {
                                if (projects[id]) {
                                    filteredProjects[id] = projects[id];
                                }
                            });

                            // Mostrar los proyectos filtrados
                            displayProjectsWithSkills(filteredProjects, projectSkills, skills);
                        } else {
                            console.log("No hay proyectos disponibles.");
                        }
                    } else {
                        console.log("No hay proyectos que usen la habilidad especificada.");
                    }
                } else {
                    console.log("No hay relaciones entre proyectos y habilidades disponibles.");
                }
            } else {
                console.log("No se encontró la habilidad para el lenguaje especificado.");
            }
        } else {
            console.log("No hay habilidades disponibles.");
        }
    } catch (error) {
        console.error("Error al obtener los datos de Firebase:", error);
    }
}

// Llamar a la función para mostrar los proyectos basados en el lenguaje
if (lenguaje) {
    showProjectsByLanguage(lenguaje);
} else {
    document.getElementById('projectsContainer').textContent = 'No se especificó un lenguaje.';
}
