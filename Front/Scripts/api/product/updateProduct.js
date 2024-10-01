const updateForm = document.querySelector('#Actualizar form');

updateForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const id = document.querySelector('#update-id').value;
    const nombre = prompt('Ingrese el nuevo nombre');
    const precio = prompt('Ingrese el nuevo precio');
    const stock = prompt('Ingrese el nuevo stock');

    if (id && nombre && precio && stock) {
        try {
            const response = await fetch(`http://localhost:8080/productos/actualizar/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: nombre,
                    precio: precio,
                    stock: stock
                })
            });

            const result = await response.text();
            alert(result);
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    } else {
        alert('Por favor, ingrese todos los datos requeridos.');
    }
    updateForm.reset();
});
