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

//---------------------- Ejercicio 1 ---------------------------//

// Conexión a la DDBB
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "colombia10",
    database: "e-commerce",
});

// Nos conectamos a la DDBB con un msj por si peta
db.connect((err) => {
    if (err) throw err;
    console.log("Conectado a la base de datos MySQL");
});

// Endpoint de prueba para obtener todos los productos (probado y funcionando)
app.get("/products", (req, res) => {
    const sql = "SELECT * FROM product";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Endpoint de prueba para obtener todas las categorías (probado y funcionando)
app.get("/categories", (req, res) => {
    const sql = "SELECT * FROM category";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Ejercicio 2 -=-=-=-=-=-=-=-=-=-=-=-=-=-=-//

// Endpoint para agregar un nuevo producto
app.post("/products", (req, res) => {
    const { name, description, price } = req.body;

    const sql = "INSERT INTO product (name, description, price) VALUES (?, ?, ?)";
    db.query(sql, [name, description, price], (err, result) => {
        if (err) throw err;
        console.log("Producto agregado:", result);

        // Enviar respuesta al cliente
        res.status(201).json({ message: "Producto agregado correctamente" });
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
