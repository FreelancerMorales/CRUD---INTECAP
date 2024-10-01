const deleteForm = document.querySelector('#Borrar form');

deleteForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const id = document.querySelector('#borrar-id').value;
    
    if (id) {
        try {
            const response = await fetch(`http://localhost:8080/clientes/eliminar/${id}`, {
                method: 'DELETE'
            });

            const result = await response.text();
            alert(result);
        } catch (error) {
            console.error('Error al eliminar el cliente:', error);
        }
    } else {
        alert('Por favor, ingrese un ID válido.');
    }
    deleteForm.reset();
});
