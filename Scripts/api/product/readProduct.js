const tableBody = document.querySelector('#clientesTable tbody');

async function fetchProductos() {
    try {
        tableBody.innerHTML = '';
        const response = await fetch('http://localhost:8080/productos/listar');
        const clientes = await response.json();
        
        clientes.forEach(cliente => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cliente.id}</td>
                <td>${cliente.nombre}</td>
                <td>Q.${cliente.precio}</td>
                <td>${cliente.stock}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        const row = document.createElement('tr');
            row.innerHTML = `
                <td>Sin Datos</td>
                <td>Sin Datos</td>
                <td>Sin Datos</td>
                <td>Sin Datos</td>
            `;
        tableBody.appendChild(row);
    }
}