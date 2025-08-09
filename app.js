// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Cambia el texto de un elemento HTML según el selector
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); // Busca el elemento (ej. 'h1', 'h2', '#id')
    elementoHTML.innerHTML = texto; // Cambia el contenido por el nuevo texto
}

// Título y subtítulo iniciales
asignarTextoElemento('h1', "Amigo Secreto");
asignarTextoElemento("h2", "Digite el nombre de sus amigos");

// Lista de amigos
let amigos = [];

// Agrega un amigo si el nombre ingresado es válido
function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value.trim(); // Captura el texto del input y quita espacios al inicio/fin
    
    // Expresión regular: solo letras (incluyendo acentos y ñ) y espacios intermedios
    let regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    // Validación
    if (!regexNombre.test(nuevoAmigo) || nuevoAmigo === '') {
        alert("Por favor ingrese un nombre válido (solo letras y espacios).");
        return; // Sale de la función si es inválido
    }

    // Validar duplicados (sin distinguir mayúsculas/minúsculas)
    if (amigos.some(nombre => nombre.toLowerCase() === nuevoAmigo.toLowerCase())) {
        alert(`El nombre "${nuevoAmigo}" ya fue introducido.`);
        return;
    }

    amigos.push(nuevoAmigo); // Añade el nombre al array
    limpiarCaja(); // Limpia el campo de entrada
    mostrarLista(); // Actualiza la lista en pantalla
}


// Muestra la lista de amigos en pantalla
function mostrarLista() {
    let listaHTML = document.getElementById('listaAmigos'); // Contenedor de la lista
    listaHTML.innerHTML = ''; // Limpia contenido previo

    for (let i = 0; i < amigos.length; i++) {
        let elementoLista = document.createElement('li'); // Crea un <li>
        elementoLista.textContent = amigos[i]; // Asigna el nombre
        listaHTML.appendChild(elementoLista); // Lo agrega al HTML
    }
}

// Limpia el campo de entrada
function limpiarCaja() {
    document.querySelector('#amigo').value = "";
}

// Sortea un amigo aleatorio y lo muestra
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    let indiceAmigoAleatorio = Math.floor(Math.random() * amigos.length); // Índice aleatorio
    let amigoSecreto = amigos[indiceAmigoAleatorio]; // Nombre según posición
    mostrarAmigo(amigoSecreto);
    reiniciarJuego();
}

// Muestra el amigo secreto sorteado
function mostrarAmigo(amigo) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: <strong>${amigo}</strong>`;
}

// Reinicia el juego limpiando la lista y el resultado
function reiniciarJuego() {
    amigos = [];
    mostrarLista();
}

