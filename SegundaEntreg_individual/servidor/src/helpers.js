const hbs = require('hbs');
const funciones = require('./funciones');

hbs.registerHelper('obtenerPromedio',(nota1,nota2,nota3) => {
  return (nota1+nota2+nota3) / 3;
})
hbs.registerHelper('crear',(id,nombre,descripcion,valor,modalidad,intensidad,estado) =>{
  let est = {
    id: id,
    nombre: nombre,
    descripcion: descripcion,
    valor: valor,
    modalidad: modalidad,
    intensidad: intensidad,
    estado: estado
  }
  funciones.crear(est);
})

hbs.registerHelper('verCurso',(id,nombre,descripcion,valor,modalidad,intensidad,estado) =>{
  listaEstudiantes = require('./listado.json')
  let texto = "<table class='table'> \
                <thead class='thead-dark'>\
                <th> Id </th>\
                <th> Nombre </th>\
                <th> Descripción </th>\
                <th> Valor </th>\
                <th> Modalidad </th>\
                <th> Intensidad </th>\
                <th> Estado </th>\
                </thead>\
                <tbody>";
  listaEstudiantes.forEach(estudiante => {
    texto = texto +
    '<tr>' +
    '<td>' + estudiante.id         + '</td>' +
    '<td>' + estudiante.nombre     + '</td>' +
    '<td>' + estudiante.descripcion+ '</td>' +
    '<td>' + estudiante.valor      + '</td>' +
    '<td>' + estudiante.modalidad  + '</td>' +
    '<td>' + estudiante.intensidad  + '</td>' +
    '<td>' + estudiante.estado + '</td>';
  })
  '</tbody></table>';
  return texto;
})

hbs.registerHelper('listar',() =>{
  listaEstudiantes = require('./listado.json')
  let texto =  "<table> \
                <thread>\
                <th> ID </th>\
                <th> Nombre </th>\
                <th> descripcion </th>\
                <th> valor </th>\
                <th> modalidad </th>\
                <th> intensidad </th>\
                <th> estado </th>\
                </thread>\
                <tbody>";
  
  'Lista de estudiantes <br> ';
  listaEstudiantes.forEach(estudiante => {
    texto = texto +
            '<tr>' +
            '<td>'+ estudiante.id + '</td>' +
            '<td>'+ estudiante.nombre + '</td>' +
            '<td>'+ estudiante.descripcion + '</td>' +
            '<td>' + estudiante.valor + '</td>' +
            '<td>' + estudiante.modalidad  + '</td>' +
            '<td>' + estudiante.intensidad + '</td>' +
            '<td>' + estudiante.estado + '</td></tr>';
  })
  texto = texto+'</tbody></table>'
  return texto;
})
