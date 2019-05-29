const fs = require('fs');
listarEstudiante = [];

const crear = (estudiante) => {
  listar();
    let est = {
      nombre: estudiante.nombre,
      matematicas: estudiante.matematicas,
      ingles: estudiante.ingles,
      programacion: estudiante.programacion
    };
    let duplicado = listarEstudiante.find(nom => nom.nombre == estudiante.nombre)
    if(!duplicado){
      listarEstudiante.push(est);
      console.log(listarEstudiante);
      guardar();
    }else{
      console.log("Ya exite otro estudiante con ese nombre de usuario ");
    }
}
const listar = () => {
  try {
    listarEstudiante = require('./listado.json');

  } catch (e) {
    listarEstudiante = [];
  }
}
const guardar = () => {
  let datos = JSON.stringify(listarEstudiante);
  fs.writeFile('listado.json',datos,(err) => {
    if(err) throw(err);
    console.log("Archivo creado con exito");
  })
}
const mostrar = () => {
  listar()
  console.log("**** Notas de los estudiante ****");
  listarEstudiante.forEach(estudiante => {
    console.log(estudiante.nombre);
    console.log('notas ');
    console.log(' matematicas '+ estudiante.matematicas );
    console.log(' ingles '+ estudiante.ingles );
    console.log(' programacion '+ estudiante.programacion +'\n');
  });
}

const mostrarest = (nom) => {
  listar();
  let est = listarEstudiante.find(buscar => buscar.nombre == nom)
  if(!est){
    console.log("No existe este estudiante");
  }else{
    console.log(est.nombre);
    console.log('notas ');
    console.log(' matematicas '+ est.matematicas );
    console.log(' ingles '+ est.ingles );
    console.log(' programacion '+ est.programacion +'\n');
  }
}

const mostrarmat = () =>{
  listar()
  let ganan = listarEstudiante.filter(mat => mat.matematicas >= 3);
  if(ganan.length == 0){
    console.log("Todos perdieron matematicas");
  }
  ganan.forEach(estudiante => {
    console.log(estudiante.nombre);
    console.log('notas ');
    console.log(' matematicas '+ estudiante.matematicas );
  });
  
}
const promedio = () => {
  listar()
  let promedios = listarEstudiante.map(est => {
    let resultado = (est.matematicas + est.ingles + est.programacion)/ 3;
    if(resultado > 3){
      console.log("Estudiantes con promedio > 3 "+est.nombre + " con promedio de : "+resultado);
    }
  });
}
const promedioest = (nom) => {
  listar()
  let est = listarEstudiante.find(buscar => buscar.nombre == nom)
  if(!est){
    console.log("No existe estudiante");
  }else{
    console.log("El promedio del estudiante es :" +(est.matematicas+est.ingles+est.programacion)/3);
  }
}
module.exports = {
  crear,
  mostrar,
  mostrarest,
  mostrarmat,
  promedioest,
  promedio
}
