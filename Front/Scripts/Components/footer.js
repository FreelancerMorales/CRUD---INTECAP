class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>Derechos Reservados para @CircuitoSapiens</p>
            </footer>
        `;
    }
}
customElements.define('my-footer', myFooter);