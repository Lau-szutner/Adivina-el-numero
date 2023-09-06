//VARIABLES 
let numAzr = Math.floor((Math.random() * 100) + 1);
let numeroElegido;
let cantidad = 0;
const comprobarBtn = $("#comprobar");



comprobarBtn.click(function () {
    numeroElegido = $("#numeroElegido").val();
    numeroElegido = parseInt(numeroElegido);
    cantidad++;
    let intentos = `Intentos: ${cantidad}`;
    $("#intentos").html(intentos);

    $("#intento").html(intentos)
    if (numeroElegido < 1 || numeroElegido > 100 || isNaN(numeroElegido)) {
        $("#mensajeError").html("El numero elejido es invalido");
    } else if (numeroElegido === numAzr) {
        $("#mensajeError").html("Felicitaciones ganaste!");
    } else if (numeroElegido < numAzr) {
        $("#mensajeError").html("Tu numero elejido es menor al numero que buscas");
    } else {
        $("#mensajeError").html("Tu numero elejido es mayor  al numero que buscas");
    };

});




