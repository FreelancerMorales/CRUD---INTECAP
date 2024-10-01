const addForm = document.querySelector('#Agregar form');

addForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;

    if (nombre && apellido) {
        try {
            const response = await fetch('http://localhost:8080/clientes/guardar', {
                method: 'POST',
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
            console.error('Error al agregar el cliente:', error);
        }
    } else {
        alert('Por favor, ingrese nombre y apellido.');
    }
    addForm.reset();
});
