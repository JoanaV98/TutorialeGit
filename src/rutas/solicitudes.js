 const express = require("express");
 const route = express.Router();

 var options = {root:require("path").join(__dirname,"../vistas")};

 route.get("/", (req,res) =>
 {
 	//res.send("Peticion solucionada");
 	res.sendFile("index.html",options);
 });

 route.get("/pqs", (req,res) =>
 	{
 		//res.send("Peticion solucionada");
 	    res.sendFile("pqs.html",options);
 	});


 route.get("/uso", (req,res) =>
 {
    //res.send("Peticion solucionada");
    res.sendFile("uso.html",options);
 });


 route.get("vistas/imagenes", (req,res) =>
 {
    //res.send("Peticion solucionada");
    res.sendFile("imagenes",options);
 });

 route.get("/index.css", (req,res) =>
 {
    //res.send("Peticion solucionada");
    res.sendFile("index.css",options);
 });

 module.exports = route;