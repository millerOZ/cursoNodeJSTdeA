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
let imprimeCurso = (nombre,duracion,valor,id) =>{
  console.log("El curso se llama: " + nombre+'\n'+
  "Tiene duracion del: " + duracion +'\n'+
  "Valor: " + valor +' pesos'+'\n'+
  "Id: "+ id+'\n'+
  "------------------------");
}
let buscaCurso = (id) =>{
  let buscar = ofertaCurso.find(function(cursoid){
    return cursoid.id == id })
    return buscar;
}
module.exports = {
  ofertaCurso,
  imprimeCurso,
  buscaCurso
};
