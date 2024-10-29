const mongoose = require('mongoose');
const suscriptorSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});
module.exports = mongoose.model('Suscriptor', suscriptorSchema);
