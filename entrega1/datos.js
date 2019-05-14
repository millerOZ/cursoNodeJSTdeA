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
let imprimeCurso = (id,nombre,duracion,valor) =>{
    console.log("El id primer del curso es: " + id);
    console.log("Nombre del curso: " + nombre);
    console.log("La duracion del curso: " + duracion);
    console.log("Valor: " + valor);
}
// id = 1;
// let buscaCurso = ofertaCurso.find(function(cursoid){
//   return cursoid.id == id })

let buscaCurso = (id) =>{
  let buscar = ofertaCurso.find(function(cursoid){
    return cursoid.id == id })
    console.log(buscar);
}
module.exports = {
  ofertaCurso,
  imprimeCurso,
  buscaCurso
};
