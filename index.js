const {obtenerPromedio, argv} = require('./datos1.js');
console.log(argv);
if(argv._[0] == 'promedio'){
  console.log("El promedio es "+(argv.m+argv.i+argv.p)/3);
}else{
  console.log("Promedio no calculado");
}
