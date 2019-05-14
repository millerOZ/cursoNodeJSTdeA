const {ofertaCurso,imprimeCurso,buscaCurso} = require('./datos.js');

// imprime 3 cursos cada 2 seg
let {id,nombre,duracion,valor} = ofertaCurso[0];

buscaCurso(1);
