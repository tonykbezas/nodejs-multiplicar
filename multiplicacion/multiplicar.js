const fs = require('fs');
//cre una variable que se llame data
let listarTabla = (num) => {
    return new Promise((resolve,reject) => {
        if (!Number(num)){
            reject(`Valor ${num} no es numero`)
            return;   
        }
        fs.readFile(`tablas/tabla-${num}.txt`, 'utf8', (error, datos) => {
            if (error) throw error;
            console.log("El contenido es: ", datos);
        });
    })
}
let crearArchivo = (base,lim) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)){
            reject(`Valor ${base} no es numero`)
            return;
        }
        let data = '';
        for (let i = 1; i <= lim; i++) {
            data += `${base}*${i}= ${base*i}\n`
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    })
}

module.exports = {
    //Se puede dar un nombre de propiedad por ejemplo crearArchivo: crearArchivo
    crearArchivo,
    listarTabla
};