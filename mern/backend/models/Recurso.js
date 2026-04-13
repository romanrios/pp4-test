const mongoose = require('mongoose');

const RecursoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  estado: { type: String, default: 'Activo' },
  fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recurso', RecursoSchema);