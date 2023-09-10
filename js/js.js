let login = document.querySelector(".ventanaEmerLog");
login.addEventListener("click", abrir);
let btnclose = document.querySelector("#close");
btnclose.addEventListener("click", cerrar);

let ventana = document.querySelector("#ventanaEmergente");

function abrir(){
    ventana.classList.remove("ventana");
    ventana.classList.add("mostrar-ventana","ventanaEmergente");
}

function cerrar(){
    ventana.classList.remove("mostrar-ventana","ventanaEmergente");
    ventana.classList.add("ventana");
}