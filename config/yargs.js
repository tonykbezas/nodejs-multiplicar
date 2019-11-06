let opt = {
    base:{
        demand:true,
        alias:'b',
        description:'La base de la tabla de multiplicar'
    },
    limite:{
        alias:'l',
        default: 10,
        description: 'El limite de la tabla de multiplicar'
    }
}
const argv = require('yargs')
.command('crear','Crea un archivo co la tabla de multiplicar',opt)
.help()
.argv;

const{crearArchivo,listarTabla} = require('./multiplicacion/multiplicar');

module.exports = {
    argv
};