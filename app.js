let listaAmigos = [];

function agregarAmigo() {
    let verificacion = document.getElementById('amigo').value.trim();
    if (verificacion === '') {
        alert('Error, El campo no puede estar vacio')
    } else {
        listaAmigos.push(verificacion);
        limpiarCampo();
        recorrerLista();
    }
    
}

function limpiarCampo() {
    document.getElementById('amigo').value = '';
}

function recorrerLista() {
    let agregarNombre = document.getElementById('listaAmigos');
    agregarNombre.innerHTML = '';
    for (let i = 0; i < listaAmigos.length; i++){
        let nombre = listaAmigos[i];
        agregarNombre.innerHTML = `<li>${nombre}</li>`
    }
}