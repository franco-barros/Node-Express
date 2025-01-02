const express = require('express');
const { faker } = require('@faker-js/faker'); // Usar la librería correcta

const router = express.Router();

// Ruta para obtener una lista de productos
router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10; // Número de productos a generar, por defecto 10

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: `https://picsum.photos/640/480`,
    });
  }

  res.json(products);
});

// Ruta para filtrar productos (si quieres implementar más filtros)
router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

// Ruta para obtener un producto específico por su id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000,
  });
});

module.exports = router;
