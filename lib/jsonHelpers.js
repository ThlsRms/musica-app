'use strict'
const fs = require('fs');


const guardarJSON = (fichero, datos) => {
    try {
        fs.writeFileSync(fichero, JSON.stringify(datos));
    } catch (err) {
        return console.error(err.message);
    }
}

const leerJSON = (fichero) => {
    try {
        return JSON.parse(fs.readFileSync(fichero))
    } catch (err) {
        return console.error(err.message);
    }
}

module.exports = { guardarJSON, leerJSON }