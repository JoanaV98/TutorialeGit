const express = require("express");
const servidor = express();
const path = require("path");

//configuración setings
servidor.set("puerto",3000);
servidor.set("views",path.join(__dirname,"vistas"));


//herramientas intermedias (niddlware)

//rutas (routes)
servidor.use(require("./rutas/solicitudes.js"));

//servidor escuchados
servidor.listen(servidor.get("puerto"), () =>
{
	console.log("Servidor escuchado en el puerto: ", servidor.get("puerto"));
});