
// BUSCAR LAS PANTALLAS
const pantallas = document.querySelectorAll(".pantalla");

function cambiarPantalla(id) {
    pantallas.forEach(function(pantalla) {
        pantalla.classList.remove("activa");
    });

    document.getElementById(id).classList.add("activa");
}


// BOTÓN PARA ABRIR EL SOBRE

abrirSobre.addEventListener("click", function() {

    abrirSobre.classList.add("abierto");

    setTimeout(function() {
        cambiarPantalla("carta");
    }, 1300);

});


// BOTÓN SEGUIMOS
const seguir = document.getElementById("seguir");

seguir.addEventListener("click", function() {
    cambiarPantalla("pregunta");
});


// RESPUESTA SÍ
const respuestaSi = document.getElementById("respuestaSi");

respuestaSi.addEventListener("click", function() {
    cambiarPantalla("finalSi");
});


// RESPUESTA NO
const respuestaNo = document.getElementById("respuestaNo");

respuestaNo.addEventListener("click", function() {
    cambiarPantalla("finalNo");
});


// ESTRELLITAS DECORATIVAS
const contenedorEstrellas = document.getElementById("estrellas");

for (let i = 0; i < 35; i++) {
    const estrella = document.createElement("span");

    estrella.textContent = "✦";
    estrella.classList.add("estrella");

    estrella.style.left = Math.random() * 100 + "%";
    estrella.style.top = Math.random() * 100 + "%";
    estrella.style.fontSize = Math.random() * 12 + 8 + "px";
    estrella.style.animationDelay = Math.random() * 3 + "s";

    contenedorEstrellas.appendChild(estrella);
}
