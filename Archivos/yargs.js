const nombre = {
  demand: true,
  alias: 'n'
}
const matematicas = {
  demand: true,
  alias: 'm'
}
const ingles = {
  demand: true,
  alias: 'i'
}
const programacion = {
  demand: true,
  alias: 'p'
}
const creacion = {
  nombre,
  matematicas,
  ingles,
  programacion
}
const muestraest = {
  nombre
}

const argv = require('yargs')
              .command('crear','crea un estudiante',creacion)
              .command('mostrarest','crea un estudiante',muestraest)
              .command('promedioest','promedio notas estudiante',muestraest)
              .argv;
              
module.exports = {
  argv
}
