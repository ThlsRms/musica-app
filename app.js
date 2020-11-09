const canciones = require('./lib/canciones');


const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Añadir canción',
    builder: {
        titulo: {
            alias: 't',
            describe: 'Titulo de la canción',
            demandOption: true,
            type: 'string'
        },
        artista: {
            alias: 'a',
            describe: 'Artista de la canción',
            demandOption: true,
            type: 'string'
        },
        año: {
            alias: 'y',
            describe: 'Año de la canción',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        canciones.addCancion(argv.titulo, argv.artista, argv.año);
    }
})

yargs.command({
    command: 'read',
    describe: 'Leer canción',
    builder: {
        titulo: {
            alias: 't',
            describe: 'Titulo de la canción',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        canciones.readCancion(argv.titulo);
    }
})

yargs.command({
    command: 'editartist',
    describe: 'Cambiar artista de la canción',
    builder: {
        titulo: {
            alias: 't',
            describe: 'Titulo de la canción',
            demandOption: true,
            type: 'string'
        },
        artista: {
            alias: 'a',
            describe: 'Nuevo artista de la canción',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        canciones.editArtista(argv.titulo, argv.artista);
    }
})

yargs.command({
    command: 'del',
    describe: 'Borrar canción',
    builder: {
        titulo: {
            alias: 't',
            describe: 'Titulo de la canción',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        canciones.delCancion(argv.titulo);
    }
})

yargs.command({
    command: 'list',
    describe: 'Listar canciones',
    handler(argv) {
        canciones.listCanciones();
    }
})

yargs.command({
    command: 'sort',
    describe: 'Ordenar canciones',
    builder: {
        criterio: {
            alias: 'c',
            describe: 'Nombre o Año',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        canciones.sortCanciones(argv.criterio);
    }
})

yargs.parse()