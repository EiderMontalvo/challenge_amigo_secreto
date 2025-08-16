let listaAmigos = [];

function agregarAmigo() {
    let verificacion = getElemento('amigo').value.trim();
    if (verificacion === '') {
        alert('Error, El campo no puede estar vacio')
    } else {
        listaAmigos.push(masyusInicial(verificacion));
        limpiarCampo();
        recorrerLista();
    }
    
}

function limpiarCampo() {
    getElemento('amigo').value = '';
}

//usamos un for para obtener cada indice del tamaño total de la lista y mostrarlos cada uno
function recorrerLista() {
    let agregarNombre = getElemento('listaAmigos');
    agregarNombre.innerHTML = '';
    for (let i = 0; i < listaAmigos.length; i++){
        let nombre = listaAmigos[i];
        agregarNombre.innerHTML += `<li>${nombre}</li>`
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('La lista de amigos está vacia');
        return;
    }
    let indice = Math.floor(Math.random()* listaAmigos.length);
    let ganador = listaAmigos[indice];
    setElemento('resultado', `${ganador} salió sorteado`);
} 

function getElemento(id) {
    return document.getElementById(id);
}
//funcion para obtener el elemento por id y asignarle un texto
function setElemento(id, texto) {
    let elemento = document.getElementById(id);
    elemento.innerHTML = texto;
    return;
}
//funcion para convertir una cadena en title case
function masyusInicial(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}