
const { EPROTONOSUPPORT } = require('constants');
const fs = require('fs');

const colors = require('colors');

console.clear();

const crearArchivo = async ( base = 1, listar, hasta = 12  ) => {

    try {
        
        let consola ='';
        let salida ='';
    
        for (let i = 1; i <= hasta; i++) {

            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            salida  += `${base} x ${i} = ${base * i}\n`;
        
        }
        
        if( listar ){
            console.log('==========================='.green);
            console.log('        Tabla del: '.green, colors.blue(base) );
            console.log('==========================='.green);

            console.log(salida);
        }        

        fs.writeFileSync(`./salidas/tabla-${base}.txt`, salida)

        return `tabla-${base}.txt`;  
    } catch (error) {
        throw error;
    }

}


module.exports = {

    crearArchivo

}
