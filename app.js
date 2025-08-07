// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Obtenemos el control del título y subtítulo de la portada
function asignarTextoElemento(elemento, texto){     // Función para cambiar el texto de un elemento HTML
    let elementoHTML = document.querySelector(elemento); // Selecciona el elemento con la etiqueta indicada (ej. 'h1', 'h2')
    elementoHTML.innerHTML = texto;      // Asigna el nuevo texto al elemento
}

asignarTextoElemento('h1', "Amigo Secreto de Edderson");  // Cambia el texto del título principal
asignarTextoElemento("h2", "Digite el nombre de sus amigos"); // Cambia el texto del subtítulo

// Agregamos los amigos y realizamos la validación del dato ingresado, evitar nulls
let amigos = [];  // Inicializamos el arreglo donde se guardarán los amigos

function agregarAmigo(){
    let nuevoAmigo = document.getElementById('amigo').value;  // Tomamos el valor ingresado en el input con id 'amigo'

    if (nuevoAmigo === '' || nuevoAmigo === null){    // Validamos que no esté vacío ni nulo
        alert("Por favor ingrese un nombre valido");  // Mostramos alerta si es inválido
    } else {
        amigos.push(nuevoAmigo);     // Agregamos el nuevo amigo a la lista
        limpiarCaja();               // Limpiamos el campo de entrada
        mostrarLista();              // Mostramos la lista actualizada en pantalla
    }

    return;   // Termina la función
}

function mostrarLista(){
    let listaHTML = document.getElementById('listaAmigos'); // Obtenemos el elemento donde se mostrará la lista por su id
    listaHTML.innerHTML = '';     // Limpiamos el contenido actual del elemento

    for (let i = 0; i < amigos.length; i++) {  // Recorremos el arreglo de amigos
        let elementoLista = document.createElement('li');    // Creamos un nuevo elemento <li>
        elementoLista.textContent = amigos[i];     // Asignamos el nombre del amigo al <li>
        listaHTML.appendChild(elementoLista);      // Agregamos el <li> a la lista en el DOM
    }
}

function limpiarCaja (){
    let valorCaja = document.querySelector('#amigo');   // Seleccionamos el input por id
    valorCaja.value = "";   // Limpiamos el valor del input
}
