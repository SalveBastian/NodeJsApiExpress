const express = require('express');
const app = express();
const port = 3000;
const usuariosRoutes = require('./usuarios/UsuariosRoutes');
const productosRoutes = require('./productos/ProductosRoutes');


app.use(express.json());

app.use('/api', usuariosRoutes);

app.use('/api', productosRoutes);

app.listen(port, () => { console.log("Server esta arriba " + port) });