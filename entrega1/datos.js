let ofertaCurso = [
  {
    id: 1,
    nombre:"nodejs",
    duracion: "60-horas",
    valor: 320,
    demand: true,
    alias:'n'
  },
  {
    id: 2,
    nombre:"python",
    duracion: "60-horas",
    valor: 420,
    demand: true,
    alias:'p'
  },
  {
    id: 3,
    nombre:"java",
    duracion: "60-horas",
    valor: 620,
    demand: true,
    alias: 'j'
  }
];
let imprimeCurso = (nombre,duracion,valor) =>{
  console.log("El curso se llama: " + nombre+'\n'+
  "Tiene duracion del: " + duracion +'\n'+
  "Valor: " + valor +' pesos');
}
let buscaCurso = (id) =>{
  let buscar = ofertaCurso.find(function(cursoid){
    return cursoid.id == id })
    return buscar;
}
// segunda historia de usuario
const fs = require('fs');
const opciones = {
  id: {
    demand: true,
    alias:'i'
  },
  nombre: {
    demand: true,
    alias: 'n'
  },
  cedula: {
    demand: true,
    alias: 'c'
  }
}
const argv = require('yargs')
            .command('inscribir','Realiza la inscripción',opciones)
            .argv
let crearArchivo = (ofertaCurso) => {
  if( !buscaCurso(argv.i) ){
    console.log("Ha ingresado un ID que no corresponde a ningun curso");
  }else{
    texto = 'El estudiante: ' + argv.n + '\n' +
            'Con cedula: '    + argv.c + '\n' +
            'Se ha matriculado en el curso llamado: ' +buscaCurso(argv.i).nombre + ' \n'+
            'Tiene una duracion de: '+ buscaCurso(argv.i).duracion +'\n' +
            'Tiene un valor de: ' +buscaCurso(argv.i).valor
    fs.writeFile('matricula.txt',texto,(err) => {
      if(err) throw (err);
      console.log('Se ha creado el Archivo');
    });
  }
}
module.exports = {
  ofertaCurso,
  imprimeCurso,
  buscaCurso,
  crearArchivo
};
