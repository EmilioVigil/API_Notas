const putRoute = require('express').Router();
const Note = require('../models/Notas');


putRoute.put('/:id', async (req, res) => {
    try {
        const { title, content } = req.body;
        const { id } = req.params
        const updateNote = await Note.findByIdAndUpdate(id, {
            title,
            content
        })

        res.status(200).send('Nota actualizada');

    } catch (e) {
        res.status(400).send('Error al actualizar la nota')
    }
})



module.exports = putRoute;