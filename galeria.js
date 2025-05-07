document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll("C:\Users\Jacqueline\OneDrive\Escritorio\Mi_portafolio_JS\Galeria_imagenes.html");
    const popup = document.getElementById("popup");
    const imagenPopup = document.getElementById("imagenPopup");
    const cerrar = document.querySelector(".cerrar");

    // Evento para mostrar la imagen en el popup
    imagenes.forEach(imagen => {
        imagen.addEventListener("click", function () {
            imagenPopup.src = this.src;
            popup.style.display = "flex";
        });
    });

    // Evento para cerrar el popup
    cerrar.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Cerrar el popup si se hace clic fuera de la imagen
    popup.addEventListener("click", function (e) {
        if (e.target !== imagenPopup) {
            popup.style.display = "none";
        }
    });
});
