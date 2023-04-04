const route = require('express').Router();
const Note = require('../models/Notas');


route.get('/', async (req, res) => {
    const allNotes = await Note.find({}).populate('user')
    res.send(allNotes)
})

module.exports = route;