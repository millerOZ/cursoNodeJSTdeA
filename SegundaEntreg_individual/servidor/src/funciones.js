const fs = require('fs');
listaEstudiantes = [];

const crear = (estudiante) => {
  listar();
  let est = {
    id: estudiante.id,
    nombre: estudiante.nombre,
    descripcion: estudiante.descripcion,
    valor: estudiante.valor,
    modalidad: estudiante.modalidad,
    intensidad: estudiante.intensidad
  };
  let duplicado = listaEstudiantes.find(nom => nom.id == estudiante.id)
  if(!duplicado){
    listaEstudiantes.push(est);
    // guardar();
  }else{
    console.log("Ya existe otro estudiante con ese id");
    // alert("Ya existe otro estudiante con ese id");
  }
}
const listar = () => {
  try {
    listaEstudiantes = require('./listado.json');
  } catch (e) {
    listaEstudiantes = [];
  }
}
const guardar = () => {
  let datos = JSON.stringify(listarEstudiante);
  fs.writeFile('listado.json',datos,(err) => {
    if(err) throw(err);
    console.log("Archivo creado con exito");
  })
}
module.exports = {
  crear
}
