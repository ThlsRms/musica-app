const canciones = require('./lib/canciones');


console.log(canciones.addCancion("Teste", "Testador", "2020"));
console.log(canciones.readCancion("Times go by"));
console.log(canciones.readCancion("Teste"));
console.log(canciones.editArtista('Teste', 'Retirado'));
console.log(canciones.delCancion('Teste'));
console.log(canciones.listCanciones());
console.log(canciones.sortCanciones('año'));
console.log(canciones.sortCanciones('nombre'));