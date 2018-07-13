//Incluyo las librerias del servidor y del motor de templates
const express = require("express")
const exphbs = require("express-handlebars")

//El servidor
const app = express()
//El motor de plantillas
const hbs = exphbs.create({defaultLayout:"main",extname:".hbs"})

//Registro el motor
app.engine(".hbs",hbs.engine)
//Pongo en uso el motor previamente registrado
app.set("view engine",".hbs")
//Configuro recursos estaticos
app.use(express.static("public"))

//Rutas
app.get("/",function(req,res){
	res.render("landing")
})

app.get("/home",function(req,res){
	res.render("home")
})

app.get("/contacto",function(req,res){
	res.render("contacto")
})

app.listen(8000,function(){
	console.log("Escuchando en el 8000....")
})


