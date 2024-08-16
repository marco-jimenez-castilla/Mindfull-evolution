function showSection(sectionId) {
    // Ocultar todas las secciones
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}

function showSubSection(subSectionId) {
    // Ocultar todas las sub-secciones
    var subSections = document.querySelectorAll('.sub-section');
    subSections.forEach(function(subSection) {
        subSection.classList.remove('active');
    });

    // Mostrar la sub-sección seleccionada
    var selectedSubSection = document.getElementById(subSectionId);
    selectedSubSection.classList.add('active');
}
