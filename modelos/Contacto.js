const mongoose = require('mongoose');

const contactoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    mensaje: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Contacto', contactoSchema);
