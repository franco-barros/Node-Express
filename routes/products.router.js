const express = require('express');
const router = express.Router();

const ProductsService = require('./../service/product.service');
const { errorHandler } = require('../middlewares/error.handler');
const service = new ProductsService();

// Ruta para obtener una lista de productos
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

// Ruta para filtrar productos (si quieres implementar más filtros)

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

// Ruta para obtener un producto específico por su id

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

//Metodo post

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

//Metodo patch

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

//Metodo delete

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.delete(id);
  res.json(product);
});
module.exports = router;
