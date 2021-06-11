
const argv = require('yargs')
.option('b',{
        alias: 'base',
        type: 'number',
        demandOption:true,
        default: 1,
        description: 'Es la base de la tabla de multiplicar.'
    }
)
.option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption:true,
        default: false,
        description: 'Muestra la tabla en consola.'
    }
)
.option('h',{
    alias: 'hasta',
    type: 'number',
    default: 12,
    description: 'Hasta donde se multiplicara la base.'
}
)
    .check( ( argv, options ) =>{
        if( isNaN(argv.b) && isNaN(argv.h)  ){
            throw 'La Base y El Hasta Tienen que ser un Número.'
        }
        return true;
    })
.argv

module.exports = argv;