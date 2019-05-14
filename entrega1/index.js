const {ofertaCurso,imprimeCurso,buscaCurso} = require('./datos.js');

// imprime 3 cursos cada 2 seg
let {id,nombre,duracion,valor} = ofertaCurso[0];
imprimeCurso(id,nombre,duracion,valor);
let imprime = (id,nombre,duracion,valor,callback) => {
  setTimeout(function(){
    callback(imprimeCurso(id,nombre,duracion,valor));
  },2000);
}
imprime(ofertaCurso[1].id,ofertaCurso[1].nombre,ofertaCurso[1].duracion,ofertaCurso[1].valor,function(){
   imprime(ofertaCurso[2].id,ofertaCurso[2].nombre,ofertaCurso[2].duracion,ofertaCurso[2].valor,function(){});
})
