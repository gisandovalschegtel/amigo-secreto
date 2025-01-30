// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];
//uso una funcion para agregar los amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    if (nombreAmigo==='') {
        alert('Por favor ingrese un nombre.');
    }
    else {
        amigos.push(nombreAmigo);
        inputAmigo.value = '';

        mostrarAmigos();

    }
}
//funcion para ir mostrando la lista cada vez que presiono añadir
function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista existente
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}
//se ejecuta cuando presiono el boton de sortear amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById('sorteado').textContent = 'No hay amigos en la lista.';
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    document.getElementById('sorteado').innerHTML = `El ganador es: ${amigoSorteado}`;
    
}