const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json()); // Este middleware permite procesar el cuerpo de las solicitudes JSON

// Rutas generales
app.get('/', (req, res) => {
  res.send('Hola, mi servidor en Express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

// Usar la función que define las rutas
routerApi(app);

// Arrancar el servidor
app.listen(port, () => {
  console.log(`Mi servidor está corriendo en el puerto ${port}`);
});
