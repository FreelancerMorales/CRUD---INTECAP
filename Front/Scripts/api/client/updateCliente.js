const updateForm = document.querySelector('#Actualizar form');

updateForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const id = document.querySelector('#update-id').value;
    const nombre = prompt('Ingrese el nuevo nombre');
    const apellido = prompt('Ingrese el nuevo apellido');

    if (id && nombre && apellido) {
        try {
            const response = await fetch(`http://localhost:8080/clientes/actualizar/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: nombre,
                    apellido: apellido
                })
            });

            const result = await response.text();
            alert(result);
        } catch (error) {
            console.error('Error al actualizar el cliente:', error);
        }
    } else {
        alert('Por favor, ingrese todos los datos requeridos.');
    }
    updateForm.reset();
});
