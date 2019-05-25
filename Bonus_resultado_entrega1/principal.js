const {ofertaCurso,imprimeCurso,crearArchivo,buscaCurso} = require('./datos.js');
const express = require('express')
const app = express()
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
// imprime 3 cursos cada 2 seg
let imprime = (nombre,duracion,valor,id,callback) => {
  setTimeout(function(){
    callback(imprimeCurso(nombre,duracion,valor,id));
  },2000);
}
if(process.argv[2] == 'inscribir'){
  let crearArchivo = (ofertaCurso) => {
    if( !buscaCurso(argv.i) ){
      let mensajeError = "Ha ingresado un ID que no corresponde a ningun curso";
      app.get('/', function (req, res) {
        res.send(mensajeError)
      })
      app.listen(3000)
    }else{
      texto = 'El estudiante: ' + argv.n + '<br>' +
              'Con cédula: '    + argv.c + '<br>' +
              'Se ha matriculado en el curso llamado: ' +buscaCurso(argv.i).nombre + '<br>'+
              'Tiene una duracion de: '+ buscaCurso(argv.i).duracion +'<br>' +
              'Tiene un valor de: ' +buscaCurso(argv.i).valor + ' pesos';
        app.get('/', function (req, res) {
          res.send(texto)
        })
        app.listen(3000)
    }
  }
  crearArchivo();
}else{
    imprime(ofertaCurso[1].nombre,ofertaCurso[1].duracion,ofertaCurso[1].valor,ofertaCurso[1].id,function(){
       imprime(ofertaCurso[2].nombre,ofertaCurso[2].duracion,ofertaCurso[2].valor,ofertaCurso[2].id,function(){
         imprime(ofertaCurso[0].nombre,ofertaCurso[0].duracion,ofertaCurso[0].valor,ofertaCurso[0].id,function(){
         });
       });
    });
}
