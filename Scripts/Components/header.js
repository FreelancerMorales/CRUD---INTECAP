class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="div-Title">
                    <a href="/index.html"><p class="title">Tienda BBB</p></a>
                </div>
                <nav>
                    <ul>
                        <li><a href="/clientes.html">Tabla Clientes</a></li>
                        <li><a href="/productos.html">Tabla Productos</a></li>
                    </ul>
                </nav>
            </header>
            <div class="headerFalso">
            Que mira bobo?, anda pa ya
            </div>
        `;
    }
}
customElements.define('my-header', myHeader);