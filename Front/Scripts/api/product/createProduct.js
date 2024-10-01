const addForm = document.querySelector('#Agregar form');

addForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const precio = document.querySelector('#precio').value;
    const stock = document.querySelector('#stock').value;

    if (nombre && precio) {
        try {
            const response = await fetch('http://localhost:8080/productos/guardar', {
                method: 'POST',
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
            console.error('Error al agregar el producto:', error);
        }
    } else {
        alert('Por favor, ingrese nombre, precio y su stock.');
    }
    addForm.reset();
});
