import { getSkills } from './firebase/firebase-get.js';
import { displaySkills } from './firebase/firebase-display.js';

document.addEventListener('DOMContentLoaded', function () {
    // Inicializar y obtener los datos de habilidades
    getSkills().then((skillsSnapshot) => {
        if (skillsSnapshot.exists()) {
            const skills = skillsSnapshot.val();
            displaySkills(skills);
        } else {
            console.log("No hay datos de habilidades disponibles.");
        }
    }).catch((error) => {
        console.error("Error al obtener los datos de habilidades:", error);
    });
});
