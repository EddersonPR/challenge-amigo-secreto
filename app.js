// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/* 
Objetivo: Crear una aplicación para ingresar nombres y sortear un "amigo secreto".
Funciones principales:
Agregar nombres: Se ingresan a través de un campo de texto y un botón.
Validación: No se permiten nombres vacíos.
Visualización: La lista de nombres se muestra en pantalla.
Sorteo aleatorio: Se selecciona un nombre al azar y se muestra el resultado.
*/

let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    inputAmigo.value = "";
    mostrarLista();
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>El amigo secreto es: <strong>${amigoSecreto}</strong></p>`;
    
    // Reiniciar lista
    amigos = [];
    mostrarLista();
}