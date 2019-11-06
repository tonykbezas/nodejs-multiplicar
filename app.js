// const multiplicar = require('./multiplicacion/multiplicar');
// //cre una variable que se llame data
// let base = 7;
// multiplicar.crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`))
// .catch(e => console.log(e));
// console.log(module);

// const{crearArchivo} = require('./multiplicacion/multiplicar');
// let base = process.argv[2];
// var regex = /(\d+)/;
// let base1 = base.match(regex)[1];
// console.log(base1);
// console.log(process.argv);
// crearArchivo(base1)
//      .then(archivo => console.log(`Archivo creado: ${archivo}`))
//      .catch(e => console.log(e));
//  console.log(module);

const {argv} = require('./config/yargs')

const{crearArchivo,listarTabla} = require('./multiplicacion/multiplicar');

let comando = argv._[0]
console.log(comando)
switch(comando){
    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        console.log(module);
        break;
    case 'listar':
        listarTabla(argv.base)
            .then(console.log('Listado'))
            .catch(e => console.log(e));
        console.log(module);
        break;
    default:
        console.log('Comando no valido!')
}