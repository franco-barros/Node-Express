const express = require('express');

const router = express.Router();

// Ruta para obtener usuarios con parámetros opcionales
router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.send('No hay parámetros');
  }
});

module.exports = router;
