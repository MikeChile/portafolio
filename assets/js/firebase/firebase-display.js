// assets/js/firebase/firebase-display.js

// Función para mostrar proyectos con habilidades en HTML
export function displayProjectsWithSkills(projects, projectSkills, skills) {

    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar los datos

    // Agrupar habilidades por proyecto
    const projectSkillMap = {};
    for (const key in projectSkills) {
        const ps = projectSkills[key];
        if (!projectSkillMap[ps.projectId]) {
            projectSkillMap[ps.projectId] = [];
        }
        projectSkillMap[ps.projectId].push(ps.skillId);
    }

    // Mostrar proyectos y habilidades
    for (const projectId in projects) {
        const project = projects[projectId];
        const skillIds = projectSkillMap[projectId] || [];
        const skillsUsed = skillIds.map(skillId => skills[skillId] ? skills[skillId].nombre : 'Desconocido').join(', ');

        const projectElement = document.createElement('div');
        projectElement.className = 'col-12 col-md-4 mb-4';

        projectElement.innerHTML = `
        <div class="example-3 card p-1">
            <div class="wrapper ${project.portada}">
                <div class="date">
                    <span class="day">${new Date(project.fecha_creacion).getDate()}</span>
                    <span class="month">${new Intl.DateTimeFormat('es', { month: 'short' }).format(new Date(project.fecha_creacion))}</span>
                    <span class="year">${new Date(project.fecha_creacion).getFullYear()}</span>
                </div>
                <ul class="menu-content">
                    <li class="pt-2"><a href="${project.repositorioCodigo}" target="_blank"><i class='bx bxl-github'></i></a></li>
                    <li class="pt-2"><a href="#"><i class='bx bxl-html5'></i></a></li>
                    <li class="pt-2"><a href="#"><i class='bx bxl-css3'></i></a></li>
                    <li class="pt-2"><a href="#"><i class='bx bxl-javascript'></i></a></li>
                </ul>
                <div class="data">
                    <div class="content">
                        <span class="type">${project.tipoProyecto}</span>
                        <h1 class="title"><a href="${project.repositorioVisual}" target="_blank" title="${project.nombreProyecto}">${project.nombreProyecto}</a></h1>
                        <p class="text">${project.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
        `;

        projectsContainer.appendChild(projectElement);
    }
}

// muestra los proyectos de sitios web
export function displayProjects(projects) {
    const container = document.getElementById('projectsContainerSite');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos proyectos

    if (projects.length > 0) {
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'col-12 col-md-4 mb-4';

            projectElement.innerHTML = `
        <div class="example-3 card p-1">
            <div class="wrapper ${project.portada}">
                <div class="date">
                    <span class="day">${new Date(project.fecha_creacion).getDate()}</span>
                    <span class="month">${new Intl.DateTimeFormat('es', { month: 'short' }).format(new Date(project.fecha_creacion))}</span>
                    <span class="year">${new Date(project.fecha_creacion).getFullYear()}</span>
                </div>
                <ul class="menu-content">
                    <li class="pt-2"><a href="${project.repositorioCodigo}" target="_blank"><i class='bx bxl-github'></i></a></li>
                    <li class="pt-2"><a href="#"><i class='bx bxl-html5'></i></a></li>
                    <li class="pt-2"><a href="#"><i class='bx bxl-css3'></i></a></li>
                    <li class="pt-2"><a href="#"><i class='bx bxl-javascript'></i></a></li>
                </ul>
                <div class="data">
                    <div class="content">
                        <span class="type">${project.tipoProyecto}</span>
                        <h1 class="title"><a href="${project.repositorioVisual}" target="_blank" title="${project.nombreProyecto}">${project.nombreProyecto}</a></h1>
                        <p class="text">${project.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
            container.appendChild(projectElement);
        });
    } else {
        container.innerHTML = 'No se encontraron proyectos.';
    }
}

// muestra los proyectos de funciones
export function displayProjectsFunctions(projects) {
    const container = document.getElementById('projectsContainerFunction');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos proyectos

    if (projects.length > 0) {
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'col-12 col-md-4 mb-4';

            projectElement.innerHTML = `
            <div class="example-3 card p-1">
                <div class="wrapper ${project.portada}">
                    <div class="date">
                        <span class="day">${new Date(project.fecha_creacion).getDate()}</span>
                        <span class="month">${new Intl.DateTimeFormat('es', { month: 'short' }).format(new Date(project.fecha_creacion))}</span>
                        <span class="year">${new Date(project.fecha_creacion).getFullYear()}</span>
                    </div>
                    <ul class="menu-content">
                        <li class="pt-2"><a href="${project.repositorioCodigo}" target="_blank"><i class='bx bxl-github'></i></a></li>
                        <li class="pt-2"><a href="#"><i class='bx bxl-html5'></i></a></li>
                        <li class="pt-2"><a href="#"><i class='bx bxl-css3'></i></a></li>
                        <li class="pt-2"><a href="#"><i class='bx bxl-javascript'></i></a></li>
                    </ul>
                    <div class="data">
                        <div class="content">
                            <span class="type">${project.tipoProyecto}</span>
                            <h1 class="title"><a href="${project.repositorioVisual}" target="_blank" title="${project.nombreProyecto}">${project.nombreProyecto}</a></h1>
                            <p class="text">${project.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
            container.appendChild(projectElement);
        });
    } else {
        container.innerHTML = 'No se encontraron proyectos de funciones.';
    }
}

// Función para mostrar proyectos de juegos
export function displayProjectsGames(projects) {
    const container = document.getElementById('projectsContainerGame');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos proyectos

    if (projects.length > 0) {
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'col-12 col-md-4 mb-4';

            projectElement.innerHTML = `
            <div class="example-3 card p-1">
                <div class="wrapper ${project.portada}">
                    <div class="date">
                        <span class="day">${new Date(project.fecha_creacion).getDate()}</span>
                        <span class="month">${new Intl.DateTimeFormat('es', { month: 'short' }).format(new Date(project.fecha_creacion))}</span>
                        <span class="year">${new Date(project.fecha_creacion).getFullYear()}</span>
                    </div>
                    <ul class="menu-content">
                        <li class="pt-2"><a href="${project.repositorioCodigo}" target="_blank"><i class='bx bxl-github'></i></a></li>
                        <li class="pt-2"><a href="#"><i class='bx bxl-html5'></i></a></li>
                        <li class="pt-2"><a href="#"><i class='bx bxl-css3'></i></a></li>
                        <li class="pt-2"><a href="#"><i class='bx bxl-javascript'></i></a></li>
                    </ul>
                    <div class="data">
                        <div class="content">
                            <span class="type">${project.tipoProyecto}</span>
                            <h1 class="title"><a href="${project.repositorioVisual}" target="_blank" title="${project.nombreProyecto}">${project.nombreProyecto}</a></h1>
                            <p class="text">${project.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
            container.appendChild(projectElement);
        });
    } else {
        container.innerHTML = 'No se encontraron proyectos.';
    }
}

// Función para mostrar proyectos por sección
export function displayProjectsSections(projects) {
    const container = document.getElementById('projectsContainerSection');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos proyectos

    if (projects.length > 0) {
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'col-12 col-md-4 mb-4';

            projectElement.innerHTML = `
            <div class="example-3 card p-1">
                <div class="wrapper ${project.portada}">
                    <div class="date">
                        <span class="day">${new Date(project.fecha_creacion).getDate()}</span>
                        <span class="month">${new Intl.DateTimeFormat('es', { month: 'short' }).format(new Date(project.fecha_creacion))}</span>
                        <span class="year">${new Date(project.fecha_creacion).getFullYear()}</span>
                    </div>
                    <ul class="menu-content">
                        <li class="pt-2"><a href="${project.repositorioCodigo}" target="_blank"><i class='bx bxl-github'></i></a></li>
                        <li class="pt-2"><a href="#"><i class='bx bxl-html5'></i></a></li>
                        <li class="pt-2"><a href="#"><i class='bx bxl-css3'></i></a></li>
                        <li class="pt-2"><a href="#"><i class='bx bxl-javascript'></i></a></li>
                    </ul>
                    <div class="data">
                        <div class="content">
                            <span class="type">${project.tipoProyecto}</span>
                            <h1 class="title"><a href="${project.repositorioVisual}" target="_blank" title="${project.nombreProyecto}">${project.nombreProyecto}</a></h1>
                            <p class="text">${project.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
            container.appendChild(projectElement);
        });
    } else {
        container.innerHTML = 'No se encontraron proyectos.';
    }
}

