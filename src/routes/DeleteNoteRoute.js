const RouteDelete = require('express').Router();
const Note = require('../models/Notas');

RouteDelete.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        await Note.findByIdAndDelete(id);
        res.status(204).send('Delete note')
    } catch (e) {
        res.status(400).send({ error: e.message })
    }
})


module.exports = RouteDelete