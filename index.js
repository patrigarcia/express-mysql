// Importamos e Inicializamos Express
const express = require("express");
const app = express();
const mysql = require("mysql2");
const port = 8080;

//PATRIIIII COPIA ESTO: " npm i "

// Agregamos Middlewares
app.use(express.json());



// Endpoint
app.get("/", (req, res) => {
    res.send("Hola, mundo!");
  });



// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});