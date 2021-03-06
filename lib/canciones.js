'use strict'
const { guardarJSON, leerJSON } = require('./jsonHelpers.js');

const cancionesDir = './data/canciones.json';

const addCancion = (titulo, artista, ano) => {
    let canciones = leerJSON(cancionesDir);
    let tituloIndex = canciones.findIndex(cancion => cancion.nombre === titulo);

    if (tituloIndex < 0) {
        canciones.push({ nombre: titulo, artista: artista, año: ano });
        guardarJSON(cancionesDir, canciones);
        console.log(`Canción añadida: Titulo: ${titulo}, Artista: ${artista}, Año: ${ano}`);
        return;
    } else {
        console.log('La canción ya esta en su biblioteca.');
    }
}

const findCancion = (tituloArg) => {
    let canciones = leerJSON(cancionesDir);
    return canciones.filter(cancion => {
        return cancion.nombre.toLowerCase().includes(tituloArg.toLowerCase());
    })
}

const readCancion = (tituloArg) => {
    console.log(findCancion(tituloArg));
}

const editArtista = (titulo, nuevoArtista) => {
    let canciones = leerJSON(cancionesDir);
    let cancionToChange = findCancion(titulo)[0];
    cancionToChange.artista = nuevoArtista;

    let tituloIndex = canciones.findIndex(cancion => cancion.nombre === titulo);
    canciones[tituloIndex] = cancionToChange;
    guardarJSON(cancionesDir, canciones);
    console.log('Artista de la canción editado: ');
    readCancion(titulo);
}

const delCancion = (titulo) => {
    let canciones = leerJSON(cancionesDir);
    let tituloIndex = canciones.findIndex(cancion => cancion.nombre === titulo);

    if (tituloIndex > -1) {
        let rtrn = canciones.splice(tituloIndex, 1)[0];
        guardarJSON(cancionesDir, canciones);
        console.log(rtrn);
        return;
    } else {
        console.log('Nada para borrar');
    }
}

const listCanciones = () => {
    let canciones = leerJSON(cancionesDir);
    console.log(canciones);
}

const sortCanciones = (criterio) => {// criterio = nombre / ano
    let canciones = leerJSON(cancionesDir);
    canciones.sort((elemA, elemB) => elemA[criterio].toLowerCase() < elemB[criterio].toLowerCase() ? -1 : 1);
    guardarJSON(cancionesDir, canciones);
    console.log(`Notas ordenadas por ${criterio}`, canciones);
}

module.exports = {
    addCancion, readCancion, editArtista, delCancion, listCanciones, sortCanciones
}
