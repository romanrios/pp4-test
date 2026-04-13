const express = require('express');
const router = express.Router();
const Recurso = require('../models/Recurso');

// Obtener todos los recursos
router.get('/', async (req, res) => {
  const recursos = await Recurso.find();
  res.json(recursos);
});

// Crear un nuevo recurso
router.post('/', async (req, res) => {
  const nuevoRecurso = new Recurso(req.body);
  await nuevoRecurso.save();
  res.json(nuevoRecurso);
});

module.exports = router;