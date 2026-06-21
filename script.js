function abrirProducto(nombre, imagen, descripcion){

    document.getElementById("modal").style.display = "block";

    document.getElementById("modalTitulo").innerText = nombre;

    document.getElementById("modalImagen").src = imagen;

    document.getElementById("modalDescripcion").innerText = descripcion;
}

function cerrarProducto(){

    document.getElementById("modal").style.display = "none";

}
