const {ofertaCurso,imprimeCurso,crearArchivo} = require('./datos.js');
// imprime 3 cursos cada 2 seg
let imprime = (nombre,duracion,valor,callback) => {
  setTimeout(function(){
    callback(imprimeCurso(nombre,duracion,valor));
  },2000);
}

if(process.argv[2] == 'inscribir'){
    crearArchivo(ofertaCurso);
}else{
    imprime(ofertaCurso[1].nombre,ofertaCurso[1].duracion,ofertaCurso[1].valor,function(){
       imprime(ofertaCurso[2].nombre,ofertaCurso[2].duracion,ofertaCurso[2].valor,function(){
         imprime(ofertaCurso[0].nombre,ofertaCurso[0].duracion,ofertaCurso[0].valor,function(){
         });
       });
    });
  }
