const opciones = {
  nombre:{
    alias: 'n',
    demand: true
  },
  matematicas: {
    default: 0,
    alias:'m'
  },
  ingles: {
    default: 0,
    alias: 'i'
  },
  programacion: {
    demand: true,
    alias: 'p'
  }
}

let obtenerPromedio = (nota1,nota2,nota3) => (nota1+nota2+nota3)/3;
const argv = require('yargs')
            .command('promedio','Calcular el promedio',opciones)
            .argv

module.exports = {
  obtenerPromedio,
  argv
};
