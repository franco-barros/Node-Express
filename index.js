const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json()); // Este middleware permite procesar el cuerpo de las solicitudes JSON

const whitelist = ['http://localhost:8080'];
const option = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};
app.use(cors());
// Rutas generales
app.get('/', (req, res) => {
  res.send('Hola, mi servidor en Express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

// Usar la función que define las rutas
routerApi(app);

//Middleware, es importante tener los middleware en su posicion indicada
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// Arrancar el servidor
app.listen(port, () => {
  console.log(`Mi servidor está corriendo en el puerto ${port}`);
});
