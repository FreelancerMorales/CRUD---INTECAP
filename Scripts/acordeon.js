function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);

    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }

    if (sectionId == 'ListarClientes') {
        fetchClientes();
    }else{
        fetchProductos();
    }
}

document.querySelectorAll('.accordion-content').forEach(content => {
    content.style.display = 'none';
});