const express = require('express');
const routerApi = require('./routes');  // Importar la función que define las rutas

const app = express();
const port = 3000;

// Definir rutas generales
app.get('/', (req, res) => {
  res.send('Hola, mi servidor en Express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

// Usar la función que define las rutas de productos
routerApi(app);

// Arrancar el servidor
app.listen(port, () => {
  console.log(`Mi servidor está corriendo en el puerto ${port}`);
});

