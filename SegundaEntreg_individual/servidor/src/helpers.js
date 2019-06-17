const hbs = require('hbs');
const funciones = require('./funciones');

hbs.registerHelper('obtenerPromedio',(nota1,nota2,nota3) => {
  return (nota1+nota2+nota3) / 3;
})
hbs.registerHelper('crear',(id,nombre,descripcion,valor,modalidad,intensidad,disponible) =>{
  let est = {
    id: id,
    nombre: nombre,
    descripcion: descripcion,
    valor: valor,
    modalidad: modalidad,
    intensidad: intensidad,
    disponible: disponible
  }
  funciones.crear(est);
})

hbs.registerHelper('verCurso',(id,nombre,descripcion,valor,modalidad,intensidad,disponible) =>{
  let est = {
    id: id,
    nombre: nombre,
    descripcion: descripcion,
    valor: valor,
    modalidad: modalidad,
    intensidad: intensidad,
    disponible: "disponible"
  }
  funciones.crear(est);

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
    '<td>' + estudiante.disponible + '</td>';
  })
  '</tbody></table>';
  return texto;
})

hbs.registerHelper('listar',() =>{
  listaEstudiantes = require('./listado.json')
  let texto =  "<table class='table'> \
                <thead class='thead-dark'>\
                <th> ID </th>\
                <th> Nombre </th>\
                <th> descripcion </th>\
                <th> valor </th>\
                <th> modalidad </th>\
                <th> intensidad </th>\
                <th> estado </th>\
                </thead>\
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

hbs.registerHelper('listar2',() =>{
  
  listaEstudiantes = require('./listado.json')
  let texto =  "<div class='accordion' id='accordionExample'>";
  i = 1;
  listaEstudiantes.forEach(estudiante => {
    texto = texto +
          `  <div class="card">
                <div class="card-header" id="heading${i}">
                  <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                      ${estudiante.nombre}
                    </button>
                  </h2>
                </div>
                
                <div id="collapse${i}" class="collapse " aria-labelledby="heading${i}" data-parent="#accordionExample">
                  <div class="card-body">
                  ${estudiante.id} <br>
                  ${estudiante.descripcion} <br>
                  ${estudiante.valor} <br>
                  ${estudiante.modalidad} <br>
                  ${estudiante.intensidad} <br>
                  ${estudiante.estado} <br>
                  </div>
                </div>`
            i = i +1;
  })
  texto = texto+'</div>';
  return texto;
})

hbs.registerHelper('registroInscripcion',(nombre, cursoDisponible) => {
  let texto =  "<div class='text-center'> \
    <h2> Estudiante " + nombre + " inscripto con exito en el curso "+ cursoDisponible
    +"</h2> </div>" ;
  return texto;
})

hbs.registerHelper('listaInscripciones',() =>{
  listaEstudiantes = require('./inscripciones.json')
  let texto =  "<div class='accordion' id='accordionExample'>";
  i = 1;
  listaEstudiantes.forEach(estudiante => {
    texto = texto +
          `  <div class="card">
                <div class="card-header" id="heading${i}">
                  <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                      ${estudiante.cursoDisponible}
                    </button>
                  </h2>
                </div>
                <div id="collapse${i}" class="collapse " aria-labelledby="heading${i}" data-parent="#accordionExample">
                  <div class="card-body">
            `
                  listaEstudiantes = require('./inscripciones.json')
                  let texto =  "<table class='table'> \
                                <thead class='thead-dark'>\
                                <th> Documento </th>\
                                <th> Nombre </th>\
                                <th> Correo </th>\
                                <th> Telefono </th>\
                                <th> Eliminar </th>\
                                </thead>\
                                <tbody>";
                  listaEstudiantes.forEach(estudiante => {
                    texto = texto +
                            '<tr>' +
                            '<td>'+ estudiante.id + '</td>' +
                            '<td>'+ estudiante.nombre + '</td>' +
                            '<td>'+ estudiante.correo + '</td>' +
                            '<td>' + estudiante.telefono + '</td></tr>';
                  })
                  texto = texto+'</tbody></table>'
                  // return texto;
                  `
                  </div>
                </div>`
            i = i +1;
  })
  texto = texto+'</div>';
  return texto;
})
