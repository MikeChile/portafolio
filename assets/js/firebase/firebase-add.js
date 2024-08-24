// assets/js/firebase/firebase-add.js

import { ref, set } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
import { database } from './firebase-config.js';

// Función para agregar una habilidad
export function addSkill(skillId, nombre, descripcion, porcentajeAvance, fechaAgregado, fechaActualizado, nivel) {
    set(ref(database, 'skills/' + skillId), {
        id: skillId,
        nombre: nombre,
        descripcion: descripcion,
        porcentajeAvance: porcentajeAvance,
        fechaAgregado: fechaAgregado,
        fechaActualizado: fechaActualizado,
        nivel: nivel
    })
        .then(() => console.log('Habilidad agregada con éxito'))
        .catch(error => console.error('Error al agregar habilidad:', error));
}

// Función para agregar un proyecto
export function addProject(projectId, nombreProyecto, descripcion, fechaCreacion, lenguajePrincipal, portada, repositorioCodigo, repositorioVisual, tipoProyecto) {
    set(ref(database, 'projects/' + projectId), {
        id: projectId,
        nombreProyecto: nombreProyecto,
        descripcion: descripcion,
        fecha_creacion: fechaCreacion,
        lenguajePrincipal: lenguajePrincipal,
        portada: portada,
        repositorioCodigo: repositorioCodigo,
        repositorioVisual: repositorioVisual,
        tipoProyecto: tipoProyecto
    })
        .then(() => console.log('Proyecto agregado con éxito'))
        .catch(error => console.error('Error al agregar proyecto:', error));
}

// Función para agregar una relación entre un proyecto y una habilidad
export function addProjectSkill(projectId, skillId) {
    set(ref(database, 'projectSkills/' + projectId + '-' + skillId), {
        projectId: projectId,
        skillId: skillId
    })
        .then(() => console.log('Relación proyecto-habilidad agregada con éxito'))
        .catch(error => console.error('Error al agregar relación proyecto-habilidad:', error));
}
