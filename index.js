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

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Ejercicio 1 -=-=-=-=-=-=-=-=-=-=-=-=-=-=-//

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

        // Envia un mensajito para confirmar
        res.status(201).json({ message: "Se agregó el producto" });
    });
});

// Endpoint que agrega una categoría nueva
app.post("/categories", (req, res) => {
    const { name_cat } = req.body;

    const sql = "INSERT INTO category (name_cat) VALUES (?)";
    db.query(sql, [name_cat], (err, result) => {
        if (err) throw err;
        console.log("Categoría agregada:", result);

        // Otro mensajito de confirmación
        res.status(201).json({ message: "Se agregó la categoría" });
    });
});

// Endpoint que enlaza la categoría con el producto
app.post("/product-category", (req, res) => {
    const { productId, categoryId } = req.body;

    // Acá hacemos la verificación para enlazar correctamente
    const sql = "INSERT INTO productCat (product_id, category_id) VALUES (?, ?)";
    db.query(sql, [productId, categoryId], (err, result) => {
        if (err) throw err;
        console.log("Enlace creado:", result);

        // La confirmación
        res.status(201).json({ message: "El enlace se creó re copado" });
    });
});

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Ejercicio 3 -=-=-=-=-=-=-=-=-=-=-=-=-=-=-//

// Endpoint que actualiza el producto
app.put("/products/:id", (req, res) => {
    const productId = req.params.id;
    const { name, description, price } = req.body;

    const sql = "UPDATE product SET name=?, description=?, price=? WHERE idproduct=?";
    db.query(sql, [name, description, price, productId], (err, result) => {
        if (err) throw err;
        console.log("Producto actualizado:", result);

        // Mensajito confirm
        res.status(200).json({ message: "Se actualizó el producto" });
    });
});

// Endpoint donde actualizamos una categoría
app.put("/categories/:id", (req, res) => {
    const categoryId = req.params.id;
    const { name_cat } = req.body;

    const sql = "UPDATE category SET name_cat=? WHERE idcategory=?";
    db.query(sql, [name_cat, categoryId], (err, result) => {
        if (err) throw err;
        console.log("Categoría actualizada:", result);

        // Mensajito confirm
        res.status(200).json({ message: "La categoría se actualizó" });
    });
});
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Ejercicio 3 -=-=-=-=-=-=-=-=-=-=-=-=-=-=-//

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
