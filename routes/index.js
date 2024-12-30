const productsRouter = require('./products.router'); // Importar el router de productos

// Configurar las rutas
function routerApi(app) {
  app.use('/products', productsRouter); // Usar el router para '/products'
}

module.exports = routerApi;
