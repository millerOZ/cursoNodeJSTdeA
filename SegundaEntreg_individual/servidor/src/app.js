const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const funciones = require('./funciones');
require('./helpers');

const directorioPublico = path.join(__dirname,'../public');
const directorioPartials = path.join(__dirname,'../partials');

app.use(express.static(directorioPublico));
hbs.registerPartials(directorioPartials);
app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine','hbs');

app.get('/',(req,res) =>{
  res.render('index',{
    titulo: 'Inicio'
  });
});

app.get('/inscripcion',(req,res) =>{
  res.render('formularioInscripcion',{
  });
});

app.post('/inscripcionUsuario',(req,res) =>{
  res.render('inscripcion',{
    nombre: req.body.nombre,
    cursoDisponible: req.body.cursoDisponible
  });
});

app.post('/verCurso',(req,res) =>{

  listaEstudiantes = require('./listado.json');
  let duplicado = listaEstudiantes.find(nom => nom.id == parseInt(req.body.id))
  if(duplicado){
    res.render('idRepetido',{
    })
  }
  funciones.crear(req.body);
   res.render('verCurso',{
   id: parseInt(req.body.id),
   nombre: req.body.nombre,
   descripcion: req.body.descripcion,
   valor: parseInt(req.body.valor),
   modalidad: req.body.modalidad,
   intensidad: parseInt(req.body.intensidad),
   estado: req.body.estado
  });
});

app.post('/crearCurso',(req,res) =>{
  res.render('crearCurso',{
    id: parseInt(req.body.id),
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    valor: parseInt(req.body.valor),
    modalidad: req.body.modalidad,
    intensidad: parseInt(req.body.intensidad),
    estado: req.body.estado
  });
});

app.get('/listaInscripciones',(req,res) => {
  res.render('listaInscripcion',{
    
  })
})
app.get('*',(req,res)=>{
    res.render('error',{
      estudiante: 'error'
    })
})

app.listen(3000,() => {
  console.log("Escuchando en el puerto 3000");
})
