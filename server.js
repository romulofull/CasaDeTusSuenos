const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/inmobiliariat', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});


const Suscriptor = require('./modelos/Suscriptor');
const Contacto = require('./modelos/Contacto');


app.post('/suscribirse', async (req, res) => {
    try {
        const { email } = req.body; 
        const suscriptor = new Suscriptor({ email });
        await suscriptor.save();
        res.status(201).send('Suscripción exitosa');
    } catch (error) {
        res.status(400).send('Error al suscribirse');
    }
});

app.post('/contacto', async (req, res) => {
    try {
        const { nombre, email, telefono, mensaje } = req.body;
        const contacto = new Contacto({ nombre, email, telefono, mensaje });
        await contacto.save();
        res.status(201).send('Mensaje enviado exitosamente');
    } catch (error) {
        res.status(400).send('Error al enviar el mensaje');
    }
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
