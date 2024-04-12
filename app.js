const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

btnSiguiente.addEventListener("click", () => {
    if (pagina < 3) {
        pagina += 1;
        pelisCartelera();
    }
});


btnAnterior.addEventListener("click", () => {
    if (pagina > 1) {
        pagina -= 1;
        pelisCartelera();
    }
})