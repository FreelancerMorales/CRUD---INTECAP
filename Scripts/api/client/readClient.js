const tableBody = document.querySelector('#clientesTable tbody');

async function fetchClientes() {
    try {
        tableBody.innerHTML = '';
        const response = await fetch('http://localhost:8080/clientes/listar');
        const clientes = await response.json();
        
        clientes.forEach(cliente => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cliente.id}</td>
                <td>${cliente.nombre}</td>
                <td>${cliente.apellido}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error al obtener los clientes:', error);
        const row = document.createElement('tr');
            row.innerHTML = `
                <td>Sin Datos</td>
                <td>Sin Datos</td>
                <td>Sin Datos</td>
            `;
        tableBody.appendChild(row);
    }
}